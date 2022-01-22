import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [{
        title: 'Member',
        path: '/member',
        icon: < IoIcons.IoIosPeople/> ,
        cName: 'nav-text'
    },
    {
        title: 'Calender',
        path: '/calender',
        icon: < FaIcons.FaRegCalendarAlt/> ,
        cName: 'nav-text'
    },
    {
        title: 'Events',
        path: '/events',
        icon: < FaIcons.FaMicrophoneAlt/> ,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: < IoIcons.IoMdPerson /> ,
        cName: 'nav-text'
    },
];