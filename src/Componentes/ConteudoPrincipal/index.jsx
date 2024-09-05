import Card1 from "../Card1";
import Card2 from "../Card2";
import Card3 from "../Card3";
import Card4 from "../Card4";
import TextoPrincipal from "../TextoPrincipal";
import Video from "../Video";



function ConteudoPrincipal(){
    return (
        <div className="mainInfo">
        <section id='info'>
            <TextoPrincipal />
            <Video />
        </section>


        <div className="cards">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        </div>


      </div>
    );
}

export default ConteudoPrincipal;