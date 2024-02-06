import { Link } from "@nextui-org/react";



export default function FooterSection() {

    return(
        <div className="w-full h-full bg-black text-gray-500 px-12 py-60 text-center flex flex-col justify-center items-center">
            <p>This was made by Timothy McMasters and created using <Link target="_blank" href="https://www.framer.com/motion/">Framer Motion</Link>, <Link target="_blank"   href="https://nextui.org/">NextUI</Link>, <Link   href="https://www.tailwindcss.com/" target="_blank">TailwindCSS</Link>, <Link   target="_blank" href="https://vercel.com/">Vercel</Link>, <Link   target="_blank" href="https://nextjs.org/">Next.js</Link>, <Link   target="_blank" href="https://react-hot-toast.com/">React-Hot-Toast</Link>, and <Link   href="https://supabase.com/" target="_blank">Supabase</Link>.</p>
        </div>
    )
}