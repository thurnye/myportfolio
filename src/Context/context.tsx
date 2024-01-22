import {createContext, useContext} from 'react';
import { DrawerType } from '../components/CompMobileNavBar/CompMobileNavBar';


interface IContext{
    setDrawerState: (dt: DrawerType) => void;
    drawerState: DrawerType | undefined;
}

export const ManageContext = createContext<IContext>({
    setDrawerState: (dt: DrawerType) => dt,
    drawerState: undefined
    
});
export const useManageContext = () => useContext(ManageContext);




// GLOBAL Context
interface IAPPContext{
    setActiveNav: (dt: string) => void;
    activeNav: string | undefined;
    setOpenRightNav: (dt: boolean) => void;
    openRightNav: boolean;
}
export const AppContext = createContext<IAPPContext>({
    setActiveNav: (dt: string) => dt,
    activeNav: undefined,
    setOpenRightNav: (dt: boolean) => dt,
    openRightNav: false
});

export const useAppContext = () => useContext(AppContext);