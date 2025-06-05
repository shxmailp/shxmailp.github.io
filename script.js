// 工具数据
const tools = [
    {
        name: "稿定设计",
        description: "在线设计平台",
        tags: ["平面设计", "图片"],
        category: "chat",
        link: "https://www.gaoding.com/"
    },
    {
        name: "飞影数字人",
        description: "AI数字人",
        tags: ["国产", "中文", "数字人"],
        category: "数字人",
        link: "https://hifly.cc/"
    },
    {
        name: "闪剪",
        description: "AI数字人",
        tags: ["国产", "语音", "数字人"],
        category: "数字人",
        link: "https://shanjian.tv/?inviteId=666936c96058d5003e3bb57f"
    },
    {
        name: "AI文案成片",
        description: "免费全能创作工具",
        tags: ["国产", "数字人", "一键成片"],
        category: "数字人",
        link: "https://www.jianying.com/ai-creator/start"
    },
    {
        name: "蝉镜",
        description: "AI数字人",
        tags: ["国产", "语音", "数字人"],
        category: "数字人",
        link: "https://www.chanjing.cc/home/"

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