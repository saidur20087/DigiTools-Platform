
import { CiPlay1 } from "react-icons/ci";

import bannerImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <div id="home" className="py-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-16">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Supercharge Your Digital Workflow
                    </h1>
                    <p className="text-xl text-gray-500">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className="flex gap-4">
                        <button className="btn btn-primary rounded-4xl hover:bg-red-300   ">Explore Products</button>
                        <button className="btn rounded-4xl border-purple-600 text-purple-500 hover:bg-white hover:text-purple-700">
                            <CiPlay1 /> Watch Demo
                        </button>
                    </div>

                </div>

                <div className="flex justify-center max-h-130 w-full">
                    <img
                        src={bannerImage}
                        alt="Digital Tools Banner"
                        className="rounded-3xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;