import lwslogo from "../assets/lws-logo-en.svg";

export default function Navbar() {
    return (
        <>
            <nav className="py-6">
                <div className="container mx-auto flex items-center justify-between gap-x-6">
                    {/* <!-- Logo --> */}
                    <a href="/">
                        <img className="h-[40px]" src={lwslogo} alt="Lws" />
                    </a>

                    <a
                        className="px-5 py-2 bg-[#172227] rounded-[44px]"
                        href="#"
                    >
                        Get Admission
                    </a>
                </div>
            </nav>
        </>
    );
}
