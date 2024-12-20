import { Outlet } from "react-router-dom";

import React from 'react';
import NavBarView from "./componentes/navBar";

const IndexView = () => {
    return (<NavBarView>
            <Outlet />
        </NavBarView>);
};

export default IndexView;
