json.set! @lists_trail.id do
    json.partial! "/api/lists_trails/lists_trail", lists_trail: @lists_trail
end
