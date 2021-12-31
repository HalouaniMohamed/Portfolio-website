const AboutMe = () => {
    return (
        <div>
            <h1 className="font-Primary text-3xl text-emerald-700 w-fit mx-auto font-bold">
                About Me
            </h1>
            <h2 className="mx-auto w-fit  text-sm">Why choose me ?</h2>
            <div className="flex w-4/5 mx-auto mt-8 h-96  shadow-3xl ">
                <img className="mr-4" src="/aboutme.gif" width={520} />
                <div className="w-[500px]">
                    <p className="text-sm font-primary  font-medium my-3 mx-2">
                        My name is Mohamed Halouani , a passionate Computer
                        science student from Higher Institute of Applied Science
                        and Technology of Sousse , always looking for
                        opportunities to improve my self as a developer , a
                        co-worker and as a person in general
                    </p>
                    <br/>
                    <h1 className="text-xl font-SecularOne font-light text-emerald-700 ">
                        this is how i spend my free time 
                    </h1>
                    <div className="flex">
                        <div className=" mr-2 w-2 h-2 bg-emerald-700 rounded-full my-auto"></div>
                        <p>Competitive programming</p>
                    </div>
                    <div className="flex">
                        <div className=" mr-2 w-2 h-2 bg-emerald-700 rounded-full my-auto"></div>
                        <p>Video Games</p>
                    </div>
                    <div className="flex">
                        <div className=" mr-2 w-2 h-2 bg-emerald-700 rounded-full my-auto"></div>
                        <p>Sports</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
