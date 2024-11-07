import { LuUsers2 } from "react-icons/lu";
import { IoTicketOutline } from "react-icons/io5";


const AdminMenu = [
   {
      id: "admin",
      title: "Dashboard",
      icon: <LuUsers2 size={20} />,
      permissions: ["administrator", "admin"],
      link: '/admin',
      navlink: '/admin'
   },
   {
      id: "table",
      title: "Table Bookings",
      icon: <LuUsers2 size={20} />,
      permissions: ["administrator", "admin"],
      children: [
         {
            id: 'booking-requests',
            title: 'Booking Requests',
            icon: <IoTicketOutline size='8' />,
            permission: ['administrator', 'admin'],
            link: '/admin/table/booking-requests',
            navlink: '/admin/table/booking-requests'
         },
         {
            id: 'booking-list',
            title: 'Booking List',
            icon: <IoTicketOutline size='8' />,
            permission: ['administrator', 'admin'],
            link: '/admin/table/booking-list',
            navlink: '/admin/table/booking-list'
         },
      ]
   },
   {
      id: "order",
      title: "Orders",
      icon: <LuUsers2 size={20} />,
      permissions: ["administrator", "admin"],
      children: [
         {
            id: 'order-requests',
            title: 'Order Requests',
            icon: <IoTicketOutline size='8' />,
            permission: ['administrator', 'admin'],
            link: '/admin/order/order-requests',
            navlink: '/admin/order/order-requests'
         },
         {
            id: 'orders-list',
            title: 'Order List',
            icon: <IoTicketOutline size='8' />,
            permission: ['administrator', 'admin'],
            link: '/admin/order/orders-list',
            navlink: '/admin/order/orders-list'
         },
      ]
   },
   {
      id: "dishes",
      title: "Dishes",
      icon: <LuUsers2 size={20} />,
      permissions: ["administrator", "admin"],
      children: [
         {
            id: 'add-dish',
            title: 'Add Dish',
            icon: <IoTicketOutline size='8' />,
            permission: ['administrator', 'admin'],
            link: '/admin/dishes/add-dish',
            navlink: '/admin/dishes/add-dish'
         },
         {
            id: 'dishes-list',
            title: 'Dishes List',
            icon: <IoTicketOutline size='8' />,
            permission: ['administrator', 'admin'],
            link: '/admin/dishes/dishes-list',
            navlink: '/admin/dishes/dishes-list'
         },

      ]
   },
   {
      id: "dish-category",
      title: "Dishes category",
      icon: <LuUsers2 size={20} />,
      permissions: ["administrator", "admin"],
      children: [
         // {
         //    id: 'add-category',
         //    title: 'Add Category',
         //    icon: <IoTicketOutline size='8' />,
         //    permission: ['administrator', 'admin'],
         //    link: '/admin/dish-category/add-category',
         //    navlink: '/admin/dish-category/add-category'
         // },
         {
            id: 'category-list',
            title: 'Category List',
            icon: <IoTicketOutline size='8' />,
            permission: ['administrator', 'admin'],
            link: '/admin/dish-category/category-list',
            navlink: '/admin/dish-category/category-list'
         },
      ]
   },
   {
      id: "user",
      title: "User",
      icon: <LuUsers2 size={20} />,
      permissions: ["administrator", "admin"],
      children: [
         {
            id: 'customers',
            title: 'Customers',
            icon: <IoTicketOutline size='8' />,
            permission: ['administrator', 'admin'],
            link: '/admin/users/customers',
            navlink: '/admin/users/customers'
         },
         {
            id: 'management',
            title: 'Management',
            icon: <IoTicketOutline size='8' />,
            permission: ['administrator', 'admin'],
            link: '/admin/users/managements',
            navlink: '/admin/users/managements'
         },
      ]
   },
];

export default AdminMenu;
