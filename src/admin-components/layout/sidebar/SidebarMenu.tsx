"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { RiArrowRightSLine } from "react-icons/ri";
import AdminMenu from "./menuList";

interface MenuItem {
   id: string;
   title: string;
   icon: JSX.Element;
   permissions?: string[];
   link?: string;
   navlink?: string;
   children?: MenuItem[];
}

interface MenuItemsProps {
   items: MenuItem[];
   groupOpen: string[];
   groupActive: string[];
   currentActiveGroup: string[];
   activeItem: string | null;
   setGroupOpen: React.Dispatch<React.SetStateAction<string[]>>;
   setActiveItem: React.Dispatch<React.SetStateAction<string | null>>;
   setGroupActive: React.Dispatch<React.SetStateAction<string[]>>;
   setCurrentActiveGroup: React.Dispatch<React.SetStateAction<string[]>>;
}

interface NavItemProps {
   item: MenuItem;
}
interface NavItemGroupProps {
   item: MenuItem[];
   groupOpen: string[];
   activeItem: string | null;
   parentItem?: MenuItem;
   groupActive: string[];
   setGroupOpen: React.Dispatch<React.SetStateAction<string[]>>;
   setGroupActive: React.Dispatch<React.SetStateAction<string[]>>;
   currentActiveGroup: string[];
   setCurrentActiveGroup: React.Dispatch<React.SetStateAction<string[]>>;
}

const SidebarMenu = () => {
   const [groupOpen, setGroupOpen] = useState<string[]>([]);
   const [groupActive, setGroupActive] = useState<string[]>([]);
   const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);
   const [activeItem, setActiveItem] = useState<string | null>(null);

   return (
      <div className="w-full h-[calc(100%-70px)]">
         <ul>
            <MenuItems
               items={AdminMenu}
               groupOpen={groupOpen}
               activeItem={activeItem}
               groupActive={groupActive}
               setGroupOpen={setGroupOpen}
               setActiveItem={setActiveItem}
               setGroupActive={setGroupActive}
               currentActiveGroup={currentActiveGroup}
               setCurrentActiveGroup={setCurrentActiveGroup}
            />
         </ul>
      </div>
   );
};

export default SidebarMenu;

const MenuItems: React.FC<MenuItemsProps> = (props) => {
   const { items, ...rest } = props;
   const FatchItems = items.map((item, index: number) => {
      if (item.children) {
         return <NavItemGroup item={item} key={index} {...rest} />;
      }
      return <NavItem item={item} key={index} {...rest} />;
   });
   return <>{FatchItems}</>;
};

const NavItem: React.FC<NavItemProps> = ({ item }) => {
   const currentURL = usePathname();
   return (
      <li className="">
         <Link
            href={item?.link || ''}
            className={clsx(
               `flex text-white items-center gap-3 overflow-hidden border-l-3 border-transparent p-2 mb-0.5`,
               {
                  "bg-[#242627] text-[#D13440] border-white": item.navlink === currentURL
               }
            )}>
            <span className="flex items-center transition-all duration-300 ease-in-out">{item.icon}</span>
            <span className={clsx(
               `flex-grow text-base line-clamp-1`,
               {
                  "font-medium": item.navlink === currentURL
               }
            )}>{item.title}</span>
         </Link>
      </li>
   );
};

const NavItemGroup: React.FC<NavItemGroupProps> = (props) => {
   const { item, groupOpen, activeItem, parentItem, groupActive, setGroupOpen, setGroupActive, currentActiveGroup, setCurrentActiveGroup } = props;

   const currentURL = usePathname();

   const toggleOpenGroup = (item: MenuItem, parent?: MenuItem) => {
      let openGroup = groupOpen || [];
      const activeGroup = groupActive;

      if (openGroup.includes(item.id)) {
         openGroup.splice(openGroup.indexOf(item.id), 1);

         if (item.children) {
            removeChildren(item.children, openGroup, groupActive);
         }
      } else if (activeGroup.includes(item.id) || currentActiveGroup?.includes(item.id)) {
         if (!activeGroup.includes(item.id) && currentActiveGroup?.includes(item.id)) {
            activeGroup.push(item.id);
         } else {
            activeGroup.splice(activeGroup.indexOf(item.id), 1);
         }
         if (setGroupActive) {
            setGroupActive([...activeGroup]);
         }
      } else if (parent) {
         if (parent.children) {
            removeChildren(parent.children, openGroup, groupActive);
         }

         if (!openGroup.includes(item.id)) {
            openGroup.push(item.id);
         }
      } else {
         openGroup = [];

         if (!openGroup.includes(item.id)) {
            openGroup.push(item.id);
         }
      }
      if (setGroupOpen) {
         setGroupOpen([...openGroup]);
      }
   };

   useEffect(() => {
      if (groupActive) {
         if (hasActiveChild(item, currentURL)) {
            if (!groupActive.includes(item.id)) groupActive.push(item.id);
         } else {
            const index = groupActive.indexOf(item.id);
            if (index > -1) groupActive.splice(index, 1);
         }

         if (setGroupActive) {
            setGroupActive([...groupActive]);
         }

         if (setCurrentActiveGroup) {
            setCurrentActiveGroup([...groupActive]);
         }
      }
      if (setGroupOpen) {
         setGroupOpen([]);
      }
   }, [currentURL]);

   const onCollapseClick = (e: any, item: any) => {
      toggleOpenGroup(item, parentItem);
      e.preventDefault();
   };

   const openClassCondition = (id: any) => {
      if (groupActive?.includes(id)) {
         return false;
      } else {
         return null;
      }
   };

   return (
      <li
         className={clsx("webx-menu-item webx-has-submenu", {
            open: openClassCondition(item.id),
            "menu-collapsed-open": groupActive?.includes(item.id),
            "sidebar-group-active": groupActive?.includes(item.id) || groupOpen?.includes(item.id) || currentActiveGroup?.includes(item.id)
         })}>
         <Link
            href="#"
            className={clsx(
               `flex text-white hover:text-[#D13440] hover:bg-[#242627] items-center border-l-3 border-transparent gap-3 overflow-hidden p-2 mb-[2px]`,
               {
                  "bg-[#242627] text-white": groupActive?.includes(item.id) || groupOpen?.includes(item.id) || currentActiveGroup?.includes(item.id)
               }
            )}
            onClick={(e) => onCollapseClick(e, item)}>
            <span className="flex items-center">{item.icon}</span>
            <span className="flex-grow text-base line-clamp-1">{item.title}</span>
            <span
               className={clsx(`flex items-center text-gray-400 transition-transform delay-150 ease-in-out`, {
                  "rotate-90": groupActive?.includes(item.id) || groupOpen?.includes(item.id) || currentActiveGroup?.includes(item.id)
               })}>
               <RiArrowRightSLine size="18" />
            </span>
         </Link>
         <ul
            className={clsx(`grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out ps-4`, {
               "!grid-rows-[1fr]": (groupActive && groupActive?.includes(item.id)) || (groupOpen && groupOpen?.includes(item.id))
            })}>
            <div className="overflow-hidden">
               <MenuItems
                  items={item?.children}
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  groupOpen={groupOpen}
                  setGroupOpen={setGroupOpen}
                  parentItem={item}
                  activeItem={activeItem}
               />
            </div>
         </ul>
      </li>
   );
};

/**
 * Check if this is a children
 * of the given item
 *
 * @param children
 * @param openGroup
 * @param currentActiveGroup
 */
export const removeChildren = (children: any, openGroup: any, currentActiveGroup: any) => {
   children.forEach((child: any) => {
      if (!currentActiveGroup.includes(child.id)) {
         const index = openGroup.indexOf(child.id);
         if (index > -1) openGroup.splice(index, 1);
         if (child.children) removeChildren(child.children, openGroup, currentActiveGroup);
      }
   });
};

/**
 * Check if the given item has the given URL
 * in one of its children
 *
 * @param item
 * @param currentUrl
 */
export const hasActiveChild = (item: any, currentUrl: any) => {
   const { children } = item;
   if (!children) {
      return false;
   }
   for (const child of children) {
      if (child.children) {
         if (hasActiveChild(child, currentUrl)) return true;
      }
      // Check if the child has a link and is active
      if (child && child.navLink && currentUrl && (child.navLink === currentUrl || currentUrl.includes(child.navLink))) return true;
   }
   return false;
};
