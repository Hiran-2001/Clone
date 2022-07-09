import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './css/Sidebar.css'
import { BsFillWalletFill } from 'react-icons/bs';
import { IoMdHelpBuoy } from 'react-icons/io';
import { AiFillGift, AiFillTag } from 'react-icons/ai';
import { BsBookmarkStarFill } from 'react-icons/bs';


function SideBar({ show }) {
    return (
        <div>

            <div className={show ? 'sidebar active' : 'sidebar'} >

                <Link class="nav-link" to="/orders"> <BsBookmarkStarFill /> Orders</Link>
                <Link class="nav-link" to="/wallet"> <BsFillWalletFill /> Wallet</Link>
                <Link class="nav-link" to="/help"> <IoMdHelpBuoy /> Help</Link>
                <Link class="nav-link" to="/promotion"> <AiFillTag /> Promotions</Link>
                <Link class="nav-link" to="/invite"> <AiFillGift />  Invite Friends</Link>

                <hr />
            </div>
            <Outlet />

        </div>
    )
}

export default SideBar