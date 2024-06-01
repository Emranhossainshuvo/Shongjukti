import { IoCheckmarkDone } from "react-icons/io5";

const About = () => {
    return (
        <>
            <div>
                <div className="my-10">
                    <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-about-us-wip1.png?v=1618511825" alt="" />
                </div>

                <div>
                    <div className="flex flex-col sm:flex-row md:flex-row px-[2%] sm:px-[5%] lg:px-[8%] mt-28 gap-10">
                        <img
                            src={`https://i.ibb.co/tQJyTpL/164212.jpg`}
                            alt=""
                            className="w-[410px] md:w-[300px] rounded-md object-cover border-t-8 border-l-8 border-sky-900 transition delay-150 duration-300 ease-in-out hover:scale-90"
                        />
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold  text-sky-800">
                                Join with best fitness coach
                            </h2>
                            <p className="max-w-xl py-7 text-sm">
                                Our personal trainers can help you meet your fitness goals. They can
                                become your teacher, your motivator, your coach and your friend. Our
                                personal trainers are degreed and certified by an accredited fitness
                                organization.
                            </p>
                            <ul className="list-image text-sm">
                                <li className="flex gap-4">
                                    <IoCheckmarkDone className="w-[20px] text-sky-700 " />
                                    Teach you to exercise using proper form to prevent injury
                                </li>
                                <li className="flex gap-4 py-3">
                                    <IoCheckmarkDone className="w-[20px] text-sky-700 " />
                                    Add diversity to your workout to get over a weight-loss plateau
                                </li>
                                <li className="flex gap-4">
                                    <IoCheckmarkDone className="w-[20px] text-sky-700  " />
                                    Boost athletic performance with sport-specific training
                                </li>
                                <li className="flex gap-4 py-3">
                                    <IoCheckmarkDone className="w-[20px] text-sky-700  " />
                                    Give you the accountability and motivation to get to the gym
                                </li>
                                <li className="flex gap-4">
                                    <IoCheckmarkDone className="w-[20px] text-sky-700 " />
                                    Encourage you to try new fitness challenges and drive your health
                                    forward
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-row justify-between px-[2%] sm:px-[5%] lg:px-[8%] mt-28 gap-10">
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-sky-800">
                            Our{" "}
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-700 text-sky-300 relative inline-block">
                                <span className="relative text-white subheading">misssion</span>
                            </span>
                        </h2>
                        <p className="max-w-2xl py-7 text-sm text-justify indent-16 ">
                            Our personal trainers can help you meet your fitness goals. They can
                            become your teacher, your motivator, your coach and your friend. Our
                            personal trainers are degreed and certified by an accredited fitness
                            orga-nization.
                        </p>
                        <p className="max-w-2xl py-5 text-sm text-justify indent-16">
                            Through our evidence-based approach, we strive to educate and inspire our clients to make sustainable lifestyle changes that go beyond mere physical appearance, focusing instead on overall health and happiness. We understand that each individual&apos;s journey is unique, and we are dedicated to providing personalized support and guidance every step of the way.
                        </p>
                    </div>
                    <img
                        src={`https://i.ibb.co/tQJyTpL/164212.jpg`}
                        alt=""
                        className="md:w-[500px] rounded-md object-cover transition delay-150 duration-300 ease-in-out hover:scale-90 border-b-8 border-r-8 border-sky-800"
                    />
                </div>
            </div>
        </>
    );
};

export default About;