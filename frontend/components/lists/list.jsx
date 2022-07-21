import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateList, deleteList } from "../../actions/list_actions.js";

// NOTES
// copy over what i need to from edit_profile comp
// working to have list comp modal have the following
// - edit title X
// - delete list X
// - edit photo
// - remove trail or visit the trail page
    // - when on trail page, work on adding trail to a list upon star click = another modal form

const List = ({ selectedList, setSelectedList, updateList, deleteList }) => {
    const list = selectedList;
    const [name, setName] = useState(list.name);
    const [photo, setPhoto] = useState();
    const [photoUrl, setPhotoUrl] = useState("/list_images/alltrails_symbol.png");

    useEffect(() => {
        const posY = window.pageYOffset;
        const modal = document.getElementById(`list-${list.id}`);
        modal.style.top = `${posY}px`;
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
    }, []);

    const handleCloseModal = e => {
        e.stopPropagation();
        const body = document.querySelector("body");
        body.style.overflow = "";
        setSelectedList();
    }

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch action to ...
        // - update list
            // - name
            // - photo
            // - trails
        updateList({
            id: list.id,
            name
        });
        handleCloseModal(e);
    };

    const handleDelete = e => {
        deleteList(list.id);
        handleCloseModal(e);
    };

    const handlePhoto = e => {
        const validPhoto = photo => {
            const mimes = [
                "image/apng",
                "image/avif",
                "image/gif",
                "image/jpeg",
                "image/png",
                "image/svg+xml",
                "image/webp"
            ]
            const mime = photo.type;
            return mimes.includes(mime);
        };
        const fileReader = new FileReader();
        const file = e.target.files[0];
        if(file) {
            fileReader.readAsDataURL(file);
            const img = e.target.parentElement.children[0];
            if(validPhoto(file)) {
                fileReader.onloadend = () => {
                    setPhoto(file);
                    setPhotoUrl(fileReader.result);
                }
                img.classList.remove("error");
                img.classList.add("success");
            } else {
                img.classList.remove("success");
                img.classList.add("error");
                setTimeout(() => {
                    img.classList.remove("error");
                    setTimeout(() => {
                        img.classList.add("error");
                        setTimeout(() => {
                            img.classList.remove("error");
                            setTimeout(() => {
                                img.classList.add("error");
                                setTimeout(() => {
                                    img.classList.remove("error");
                                }, 250);
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);

            }
        }
    };

    const handleName = e => {
        setName(e.target.value);
        if(e.target.value.length === 0) {
            e.target.classList.add("error");
        } else {
            e.target.classList.remove("error");
        }
    };

    return (
        <section onClick={handleCloseModal} id={`list-${list.id}`} className="list-modal">
            <form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <section>
                    <div>
                        <img onClick={handleCloseModal} src="/trail_images/x_icon.png" alt="Close"/>
                        <img onClick={handleDelete} src="/list_images/trash_icon.png" alt="Delete List"/>
                    </div>
                    <div>
                        <label htmlFor="file-upload">
                            <img src="/list_images/add_img_icon.png" alt="Add image"/>
                            <input onChange={handlePhoto} id="file-upload" type="file"/>
                        </label>
                        <input onChange={handleName} value={name} placeholder="Title required"/>
                    </div>
                    <img src={photoUrl} alt="List photo"/>
                </section>
                <section>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </section>
            </form>
        </section>
    );
};

const mDTP = dispatch => ({
    updateList: list => dispatch(updateList(list)),
    deleteList: listId => dispatch(deleteList(listId))
});

export default connect(null, mDTP)(List);
