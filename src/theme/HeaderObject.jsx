import { icons } from "lucide-react";
import { LogOut, MapPinned, Settings, Phone, Map, FunnelPlus, Grid3x3, IdCard, ChartNoAxesCombined, SquareChartGantt, TextCursorInput, Workflow, BookCheck, Calendar, Cpu } from "lucide-react";
import { Component } from "react";
import BasicTable from "../DemoComponent/Table/BasicTable";
import SortTable from "../DemoComponent/Table/SortTable";
import  CheckBoxTable from '../DemoComponent/Table/CheckBoxTable'
export const menuObject = [
    //     {
    //     isTooltips: true,
    //     name: "Map",
    //     icons: <MapPinned />,
    //     url: "",
    //     submenu: [],
    //     sideMenu: []
    // },
    {
        isTooltips: true,
        name: "Table",
        icons: <Grid3x3 />,
        url: "/table",
        submenu: [],
        sideMenu: [
            {
                isTooltips: true,
                name: "Basic Table",
                icons: <Grid3x3 />,
                url: "/table/basic",
                component:<BasicTable />
            },
            {
                isTooltips: true,
                name: "Sort Table",
                icons: <Grid3x3 />,
                url: "/table/sort",
                component:< SortTable />
            },
            {
                isTooltips: true,
                name: "CheckBox Table",
                icons: <Grid3x3 />,
                url: "/table/checkbox",
                component:<CheckBoxTable />
            }
        ]
    },
    {
        isTooltips: true,
        name: "Card",
        icons: <IdCard />,
        url: "/card",
        submenu: [],
        sideMenu: [
            {
                isTooltips: true,
                name: "Basic Card",
                icons: <IdCard />,
                url: "/card/basic",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "Sort Card",
                icons: <IdCard />,
                url: "/table/sort",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "CheckBox Card",
                icons: <IdCard />,
                url: "/table/checkbox",
                 component:<CheckBoxTable />
            }
        ]
    },
    {
        isTooltips: true,
        name: "Graph",
        icons: <ChartNoAxesCombined />,
        url: "/graph",
        submenu: [],
        sideMenu: [
            {
                isTooltips: true,
                name: "Basic Graph",
                icons: <ChartNoAxesCombined />,
                url: "/graph/basic",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "Sort Graph",
                icons: <ChartNoAxesCombined />,
                url: "/graph/sort",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "CheckBox Graph",
                icons: <ChartNoAxesCombined />,
                url: "table",
                 component:<CheckBoxTable />
            }
        ]


    },
    {
        isTooltips: true,
        name: "Button",
        icons: <SquareChartGantt />,
        url: "#",
        submenu: [],
        sideMenu: [
            {
                isTooltips: true,
                name: "Basic Button",
                icons: <SquareChartGantt />,
                url: "table",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "Sort Button",
                icons: <SquareChartGantt />,
                url: "table",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "CheckBox Button",
                icons: <SquareChartGantt />,
                url: "table",
                 component:<CheckBoxTable />
            }

        ]


    },
    {
        isTooltips: true,
        name: "Input",
        icons: <TextCursorInput />,
        url: "#",
        submenu: [],
        sideMenu: [
            {
                isTooltips: true,
                name: "Basic Input",
                icons: <TextCursorInput />,
                url: "table",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "Sort Input",
                icons: <TextCursorInput />,
                url: "table",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "CheckBox Input",
                icons: <TextCursorInput />,
                url: "table",
                 component:<CheckBoxTable />
            }
        ]

    },

    {
        isTooltips: true,
        name: "Action",
        icons: <Workflow />,
        url: "#",
        submenu: [],
        sideMenu: [

            {
                isTooltips: true,
                name: "Basic Action",
                icons: <Workflow />,
                url: "table",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "Sort Action",
                icons: <Workflow />,
                url: "table",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "CheckBox Action",
                icons: <Workflow />,
                url: "table",
                 component:<CheckBoxTable />
            }
        ]

    },


    {
        isTooltips: true,
        name: "Select",
        icons: <BookCheck />,
        url: "#",
        submenu: [],
        sideMenu: [
            {
                isTooltips: true,
                name: "Basic Select",
                icons: <Workflow />,
                url: "table",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "Sort Select",
                icons: <Workflow />,
                url: "table",
                 component:<CheckBoxTable />
            },
            {
                isTooltips: true,
                name: "CheckBox Select",
                icons: <Workflow />,
                url: "table",
                 component:<CheckBoxTable />
            }
        ]

    },

    {
        isTooltips: true,
        name: "Date",
        icons: <Calendar />,
        url: "#",
        submenu: [],
        sideMenu: [{
            isTooltips: true,
            name: "Basic Date",
            icons: <Calendar />,
            url: "table",
             component:<CheckBoxTable />
        },
        {
            isTooltips: true,
            name: "Sort Date",
            icons: <Calendar />,
            url: "table",
             component:<CheckBoxTable />
        },
        {
            isTooltips: true,
            name: "CheckBox Date",
            icons: <Calendar />,
            url: "table",
             component:<CheckBoxTable />
        }]

    },
    {
        isTooltips: true,
        name: "Chips",
        icons: <Cpu />,
        url: "#",
        submenu: [],
        sideMenu: [{
            isTooltips: true,
            name: "Basic Chips",
            icons: <Cpu />,
            url: "table",
             component:<CheckBoxTable />
        },
        {
            isTooltips: true,
            name: "Sort Chips",
            icons: <Cpu />,
            url: "table",
             component:<CheckBoxTable />
        },
        {
            isTooltips: true,
            name: "CheckBox Chips",
            icons: <Cpu />,
            url: "table",
             component:<CheckBoxTable />
        }]

    },
]



// export const menuObject = [{
//     isTooltips: false,
//     name: "TQ Score",
//     icons: <MapPinned />,
//     url: "",
//     submenu: [],
//     sideMenu: [{
//         isTooltips: false,
//         name: "TQ Score1",
//         icons: <MapPinned />,
//         url: "",
//     },
//     {
//         isTooltips: false,
//         name: "TQ Score2",
//         icons: <MapPinned />,
//         url: "",
//     }, {
//         isTooltips: false,
//         name: "TQ Score3",
//         icons: <MapPinned />,
//         url: "",
//     }
//     ]

// },
// {
//     isTooltips: false,
//     name: "TQ Filter",
//     icons: <FunnelPlus />,
//     url: "",
//     submenu: []
//     ,
//     sideMenu: [{
//         isTooltips: false,
//         name: "TQ Score",
//         icons: <MapPinned />,
//         url: "",
//     }]

// },
// {
//     isTooltips: false,
//     name: "Voip Corelation",
//     icons: <Phone />,
//     url: "",
//     submenu: [],
//     sideMenu: [{
//         isTooltips: false,
//         name: "TQ Score",
//         icons: <MapPinned />,
//         url: "",
//     }]

// },
// {
//     isTooltips: false,
//     name: "Base Stay",
//     icons: <Map />,
//     url: "",
//     submenu: [],
//     sideMenu: [{
//         isTooltips: false,
//         name: "TQ Score",
//         icons: <MapPinned />,
//         url: "",
//     }]

// },
// {
//     isTooltips: false,
//     name: "Setting",
//     icons: <Settings />,
//     url: "",
//     submenu: [],
//     sideMenu: [{
//         isTooltips: false,
//         name: "TQ Score",
//         icons: <MapPinned />,
//         url: "",
//     }]

// },
// {
//     isTooltips: false,
//     name: "Logout",
//     icons: <LogOut />,
//     url: "",
//     submenu: [],
//     sideMenu: [{
//         isTooltips: false,
//         name: "TQ Score",
//         icons: <MapPinned />,
//         url: "",
//     }]
// },
// ]