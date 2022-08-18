import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div>
      <div className="flex items-center space-x-8 pt-[40px]">
        <Link href={"https://www.facebook.com/NetflixAsia"}>
          <FacebookIcon className="socialMedia" />
        </Link>
        <Link href={"https://www.instagram.com/netflixasia/"}>
          <InstagramIcon className="socialMedia" />
        </Link>
        <Link
          href={
            "https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos"
          }
        >
          <YouTubeIcon className="socialMedia" />
        </Link>
      </div>
      <ul className="flex flex-start flex-wrap">
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Audio Description</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Help Center</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Gift Cards</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Media Center</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Investor Relations</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Jobs</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Terms of Use</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Privacy</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Legal Notices</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Cookie Preferences</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Corporate Information</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Contact Us</span>
          </Link>
        </li>
      </ul>
      <div className="my-[30px]">
        <button className="text-[#808080] text-[.9rem] hover:text-white border-[1px] border-[#808080 px-2 py-1">
          Service Code
        </button>
      </div>
      <div className="text-[.9rem]">&copy; 1997-2022 Netflix, Inc.</div>
    </div>
  );
}

export default Footer;
