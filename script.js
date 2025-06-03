// 工具数据
const tools = [
    {
        name: "ChatGPT",
        description: "OpenAI开发的对话AI，支持自然语言交流",
        tags: ["聊天", "写作", "编程"],
        category: "chat",
        link: "https://chat.openai.com"
    },
    {
        name: "文心一言",
        description: "百度推出的中文对话AI，适合中文场景",
        tags: ["国产", "中文", "创作"],
        category: "chat",
        link: "https://yiyan.baidu.com"
    },
    {
        name: "通义千问",
        description: "阿里云开发的中文AI助手",
        tags: ["国产", "办公", "编程"],
        category: "chat",
        link: "https://tongyi.aliyun.com"
    },
    {
        name: "WPS AI",
        description: "金山办公的AI工具，集成在WPS中",
        tags: ["国产", "办公", "PPT"],
        category: "productivity",
        link: "https://ai.wps.cn"
    },
    {
        name: "讯飞星火",
        description: "科大讯飞的认知大模型",
        tags: ["国产", "语音", "写作"],
        category: "chat",
        link: "https://xinghuo.xfyun.cn"

    },
    {
         name: "即梦AI",
         description: "一站式AI创作平台",
         tags: ["国产",  "绘图"],
         category: "AI绘图",
         link: " https://jimeng.jianying.com/ "
    }

];

// 渲染工具卡片
function renderTools() {
    const container = document.getElementById('toolContainer');
    container.innerHTML = '';
    
    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <div class="tool-header">
                <h3 class="tool-title">${tool.name}</h3>
            </div>
            <div class="tool-body">
                <p class="tool-desc">${tool.description}</p>
                <div class="tool-tags">
                    ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${tool.link}" class="tool-link" target="_blank">访问工具</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// 搜索功能
document.querySelector('.search-box button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-box input').value.toLowerCase();
    if (!searchTerm) {
        renderTools();
        return;
    }
    
    const filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) || 
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    const container = document.getElementById('toolContainer');
    container.innerHTML = '';
    
    filteredTools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <div class="tool-header">
                <h3 class="tool-title">${tool.name}</h3>
            </div>
            <div class="tool-body">
                <p class="tool-desc">${tool.description}</p>
                <div class="tool-tags">
                    ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${tool.link}" class="tool-link" target="_blank">访问工具</a>
            </div>
        `;
        container.appendChild(card);
    });
});

// 初始化页面
document.addEventListener('DOMContentLoaded', renderTools);