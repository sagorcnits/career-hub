const Footer = () => {
  return (
   <div className="bg-[#1A1919] py-20 px-10 md:px-0">
     <footer className="footer max-w-6xl mx-auto pb-2 text-white border-b border-[#7E90FE33]">
  <aside>
  <h1 className="text-[30px] font-bold py-4">CareerHub</h1>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
    <img className="w-[70%] py-2" src="icons/social.png" alt="" />
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
     </footer>
     <div className="flex justify-between text-[rgba(255,255,255,0.40)] max-w-6xl mx-auto pt-4">
       <p>@2023 CareerHub. All Rights Reserved</p>
       <p>Powered by CareerHub</p>
     </div>
   </div>
   
  );
};

export default Footer;
