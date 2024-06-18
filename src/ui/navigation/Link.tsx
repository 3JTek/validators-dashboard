"use client";

import { useRouter } from "next/navigation";

type LinkProps = {
  url?: string;
  linkedOut?: boolean;
  path?: string;
  active?: boolean;
  children: string;
};

const Link = ({ url, linkedOut = true, path, active = false, children }: LinkProps) => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  const internalLink = (path: string) => {
    return (
      //Can't add "capitalize" to the parent component due to css reset
      <button className="capitalize" onClick={() => navigate(path)}>
        {children}
      </button>
    );
  };

  const externalLink = () => {
    return (
      <a className="capitalize" href={url} target={linkedOut ? "_blank" : "_self"}>
        {children}
      </a>
    );
  };

  return (
    <div className={`text-sm text-white ${active ? "opacity-100" : "opacity-50"}`}>
      {path ? internalLink(path) : externalLink()}
    </div>
  );
};

export default Link;
