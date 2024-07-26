import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import StoreSwitcher from "./store-switcher";
import { StoreModal } from "./modals/store-modal";

const Navbar= () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
            <div>
            <StoreSwitcher />
            </div>
            <div>
                This will be the routes
            </div>
            <MainNav className="mx-6"/>
            <div className="ml-auto flex items-center space-x-4">
                <UserButton />
            </div>
            </div>
        </div>
    )
}

export default Navbar;