import Image from "next/image";
import Link from "next/link";
import {
  Pencil2Icon,
  ListBulletIcon,
  CalendarIcon,
  GearIcon,
  ExitIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons"; // Import your icon components here
import ModeToggle from "@/components/theme-switcher"; // Assuming ModeToggle is a custom component
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

function Navbar() {

    const navOptions = [
        {
            name: "Notes",
            icon: Pencil2Icon,
            link: "/notes",
            style: "flex items-center gap-2 hover:text-primary"
        },
        {
            name: "Tasks",
            icon: ListBulletIcon,
            link: "/tasks",
            style: "flex items-center gap-2 hover:text-primary"
        },
        {
            name: "Calendar",
            icon: CalendarIcon,
            link: "/calendar",
            style: "flex items-center gap-2 hover:text-primary"
        },
        {
            name: "Settings",
            icon: GearIcon,
            link: "/settings",
            style: "flex items-center gap-2 hover:text-primary"
        },
        {
            name: "Logout",
            icon: ExitIcon,
            link: "/logout",
            style: "flex items-center gap-2 hover:text-destructive"
        },
    ]

  return (
    <nav className="p-4 bg-background text-foreground">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" width={40} height={40} alt="Logo" />
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight xl:text-5xl">
              Note<span className="text-primary">Flow</span>
            </h1>
          </Link>
          <ul className="flex items-center gap-6 text-xl font-semibold tracking-tight">
            {navOptions.map((option) => (
            <li className="hidden lg:flex" key={option}>
              <Link
                href={option.link}
                className={option.style}
              >
                <option.icon />
                {option.name}
              </Link>
            </li>
            ))}
            <li className="lg:hidden flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger><HamburgerMenuIcon className="h-6 w-6"/></DropdownMenuTrigger>
                
                <DropdownMenuContent className="bg-background" >
                {navOptions.map((option) => (
                  <DropdownMenuItem key={option}>
                    <Link
                      href={option.link}
                      className={option.style}
                    >
                      <option.icon />
                      {option.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
