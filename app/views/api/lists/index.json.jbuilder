json.set! :lists do
    @lists.each do |list|
        json.set! list.id do
            json.partial! "/api/lists/list", list: list
        end
    end
end

json.set! :lists_trails do
    @lists.each do |list|
        list.lists_trails.each do |lists_trail|
            json.set! lists_trail.id do
                json.partial! "api/lists_trails/lists_trail", lists_trail: lists_trail
            end
        end
    end
end
