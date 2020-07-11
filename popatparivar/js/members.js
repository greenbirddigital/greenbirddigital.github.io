var members = [
    {
        id: "vkp",
        tags: ["c1"],
        name: "Vallabhadas K Popat",
        birth_place: "Rajkot",
        img: "images/logo.png"
    },
    {
        id: "pvp",
        tags: ["c1"],
        name: "Pushpaben V Popat",
        img: "images/logo.png"
    },
    {
        id: "mvp",
        pid: "vkp",
        tags: ["c2"],
        name: "Mukeshbhai V Popat",
        img: "images/logo.png"
    },
    {
        id: "bmp",
        pid: "vkp",
        tags: ["c2"],
        name: "Beenaben M Popat",
        img: "images/logo.png"
    },
    {
        id: "kmp1988",
        pid: "mvp",
        tags: ["c4"],
        name: "Kushal M Popat",
        img: "images/logo.png"
    },
    {
        id: "vkp1990",
        pid: "mvp",
        tags: ["c4"],
        name: "Vaishali K Popat",
        img: "images/logo.png"
    },
    {
        id: "nkp",
        pid: "kmp1988",
        name: "Netri K Popat",
        img: "images/logo.png"
    },
    {
        id: "jkp",
        pid: "kmp1988",
        name: "Jeel K Popat",
        img: "images/logo.png"
    }, {
        id: "kmp1989",
        pid: "mvp",
        tags: ["c5"],
        name: "Kuldeep M Popat",
        img: "images/logo.png"
    },
    {
        id: "mkp",
        pid: "mvp",
        tags: ["c5"],
        name: "Monali K Popat",
        img: "images/logo.png"
    },
    {
        id: "akp",
        pid: "kmp1989",
        name: "Ansh K Popat",
        img: "images/logo.png"
    },
    {
        id: "dvp",
        pid: "vkp",
        tags: ["c3"],
        name: "Dipakbhai V Popat",
        img: "images/logo.png"
    },
    {
        id: "ndp",
        pid: "vkp",
        tags: ["c3"],
        name: "Neelaben D Popat",
        img: "images/logo.png"
    },
    {
        id: "kdp",
        pid: "dvp",
        tags: ["c6"],
        name: "Karan D Popat",
        img: "images/logo.png"
    },
    {
        id: "vkp1995",
        pid: "dvp",
        tags: ["c6"],
        name: "Vishva K Popat",
        img: "images/logo.png"
    },
    {
        id: "pmk",
        pid: "vkp",
        tags: ["c7"],
        name: "Pragnaben M Khandhediya",
        img: "images/logo.png"
    },
    {
        id: "mck",
        pid: "vkp",
        tags: ["c7"],
        name: "Mukeshbhai C Khandhediya",
        img: "images/logo.png"
    },
    {
        id: "bpt",
        pid: "vkp",
        tags: ["c8"],
        name: "Bhavnaben P Tanna",
        img: "images/logo.png"
    },
    {
        id: "pct",
        pid: "vkp",
        tags: ["c8"],
        name: "Pravinbhai C Tanna",
        img: "images/logo.png"
    },
    {
        id: "umg",
        pid: "vkp",
        tags: ["c9"],
        name: "Ushaben M Gotecha",
        img: "images/logo.png"
    },
    {
        id: "mxg",
        pid: "vkp",
        tags: ["c9"],
        name: "Manojbhai X Gotecha",
        img: "images/logo.png"
    },
];
window.onload = function () {
    var coupleNode = {
        group: true,
        template: "coupleNode",
        groupState: FamilyTree.EXPAND
    };

    /* coupleNode template */
    FamilyTree.templates.coupleNode = Object.assign({}, FamilyTree.templates.base);
    FamilyTree.templates.coupleNode.size = [500, 350];
    FamilyTree.templates.coupleNode.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#FFFFFF" stroke-width="1" stroke="#282828"></rect>';
    FamilyTree.templates.coupleNode.groupPadding = [0, 0, 0, 0];
    FamilyTree.templates.split.size = [20, 20];
    FamilyTree.templates.coupleNode.groupNodesSeparation = 100;

    /* familyTree template */
    FamilyTree.templates.familyTree = Object.assign({}, FamilyTree.templates.base);
    FamilyTree.templates.familyTree.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#FFFFFF"></rect>';
    FamilyTree.templates.familyTree.field_0 = '<text style="font-size: 24px; text-transform: uppercase" fill="#282828" x="150" y="300" text-anchor="middle">{val}</text>';
    FamilyTree.templates.familyTree.img_0 = '<clipPath id="{randId}"><circle cx="150" cy="150" r="150"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="25" y="0"  width="250" height="250"></image>';
    FamilyTree.MAXIMIZE = '';
    FamilyTree.MINIMIZE = '';

    var chart = new FamilyTree(document.getElementById("tree"), {
        template: "familyTree",
        nodeBinding: {
            field_0: "name",
            field_1: "birth_place",
            img_0: "img"
        },
        collapse: {
            level: 2,
            allChildren: true
        },
        tags: {
            c1: coupleNode,
            c2: coupleNode,
            c3: coupleNode,
            c4: coupleNode,
            c5: coupleNode,
            c6: coupleNode,
            c7: coupleNode,
            c8: coupleNode,
            c9: coupleNode,
        },
        nodes: members,
    });
};
