const AboutMe = () => {
    return (
        <div>
            <div className="">
                <h1 className="font-Primary text-3xl text-emerald-700 w-fit mx-auto font-bold">About Me </h1>
                <h2 className="mx-auto w-fit  text-sm">Why choose me ?</h2>
                <div className="flex w-fit mx-auto mt-8 h-96">
                    <img className=""  src="/photo.png" width={480} />
                    <div className="w-[500px]">
                        <p className="text-sm  ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <h1 className="text-xl font-secondary">Here are a few highlights</h1>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe
