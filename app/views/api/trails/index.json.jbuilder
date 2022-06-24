@trails.each do |trail|
    json.set! trail.id do
        json.partial! "/api/trails/trail", trail: trail   
    end
end