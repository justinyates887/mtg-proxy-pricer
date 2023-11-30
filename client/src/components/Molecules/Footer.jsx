export function Footer() {
    return (
        <div className="footer text-center">
            <div className="justify-content-center">
                &copy; {new Date().getFullYear()} 
                <a href="github.com/justinyates887" target="_blank" rel="noreferrer"> Justin Yates </a>
                |
                <a href="https://github.com/justinyates887/mtg-proxy-pricer" target="_blank" rel="noreferrer"> Docs </a>
            </div>
        </div>
    )
}