import Pet from "./Pet";

const Results = ({ pets }) => {


    return (
        <div className="search">
            {!pets.length ? (
                <h2>No Pets Found</h2>
            ) : (
                pets.map((pet) => {
                    return (
                        <Pet               // older way //
                            animal={pet.animal}
                            key={pet.id}
                            name={pet.name}
                            breed={pet.breed}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                            id={pet.id}
                        />

                        // <pet      // new way //
                        // {...pet}
                        // key={pet.div}
                        // />
                    );
                })
            )}
        </div>
    );
};

export default Results;