import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `
public class Developer {
    public string FirstName { get; set; } = "Patrick";
    public string LastName { get; set; } = "Ayllon";
    public string Aka { get; set; } = "Architect";

    public void Hobbies() {
        // Eat();
        // Sleep();
        // Code();
        // Repeat();
    }
}
`;

const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="colum">
            <HeaderTitle />
          </div>
          <div className="colum">
            <img src={profile1} className="profile__photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted discription">
              Diseño el flujo oculto de datos que mantiene la armonía entre
              usuarios, servicios y tecnología.
            </p>
            <p>
              <Facts />
              <SocialHandles />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
