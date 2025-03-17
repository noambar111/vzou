import DsCard from "../../../components/Home/DsCardForPilot";
import HomePageData from "../../../components/Home/HomePageData";
import FloatUpContainer from "../../../components/UI/FloatUpContainer";

const Group2Component = () => {

    const filteredSorts = HomePageData.filter(element =>
    element.type === "Sort_p" );
    console.log(filteredSorts);
    return (
        <>
        <br />
        <h2> Group 2 </h2>
        <br />

        <button> Back to Gallery</button>
        <FloatUpContainer>
            <section className="container mx-auto px-0 md:px- py-24 h-full w-full">
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 justify-items-center gap-12 gap-y-24">
                    {filteredSorts.map((element, index) => (
                        <DsCard
                            key={index}
                            title={element.title}
                            image={element.image}
                            gif={element.gif}
                            url={element.url}
                        />
                    ))}
                </div>
            </section>
        </FloatUpContainer>
        </>
    )
}

export default Group2Component;
