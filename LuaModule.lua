require('strict')
local p = {}

function p.main(frame)
	local args = frame.args
    local element = mw.html.create('ol')

    for i, value in ipairs(args) do
        element:tag('li'):wikitext(args[i])
    end

	return element
end

function p.debug()
	local output = p.main(mw.getCurrentFrame()
		:newChild {
			title = 'Module:LuaModule',
			args = {
                'arg1',
                'arg2',
                'arg3',
            }
		})

    mw.logObject(output)
end

return p
