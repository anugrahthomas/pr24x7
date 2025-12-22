import Card from "../../components/Home/Card";
import map from "../../assets/map.svg";
import building from "../../assets/building.svg";
import media from "../../assets/media.svg";
import design from "../../assets/design.svg";


const CardList = () => {
    return <>
        <Card logo={map}>Strongest hold in Hindi -Speaking Belt</Card>
          <Card logo={building}>~300 Districts</Card>
          <Card logo={media}>Media Relationship Experts</Card>
          <Card logo={design}>
            Crisis Communication & Media Monitoring Expertise
          </Card>
    </>
}
export default CardList;