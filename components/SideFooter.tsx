import Link from "next/link";

function SideFooter() {
  return (
    <div>
      <ul className="flex flex-start flex-wrap mt-3">
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">FAQ</span>
          </Link>
        </li>
        <li className="footerLink">
          <Link href={"/"}>
            <span className="footerSpan">Help Center</span>
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
      </ul>
      <div className="px-[4%] mt-10">
        <input
          list="languages"
          className="text-black text-[.9rem] border-[1px] border-[#808080] px-2 py-1"
          placeholder="Language"
        />
        <datalist id="languages">
          <option value={"English"} />
          <option value={"Tiếng Việt"} />
          <option value={"日本語"} />
        </datalist>
      </div>
    </div>
  );
}

export default SideFooter;
