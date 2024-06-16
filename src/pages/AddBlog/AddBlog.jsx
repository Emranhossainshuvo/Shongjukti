
const AddBlog = () => {

    const handlePublish = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const blog = form.blog.value;
        console.log(title, blog)
    }

    return (
        <>
            <section className="max-w-screen-lg my-16 h-[100vh]  mx-auto">
                <form onSubmit={handlePublish} className="flex flex-col gap-5">
                    <input className="outline-none text-2xl focus:border-gray-400 border-gray-200 border-b-2 pb-2 font-semibold" type="text" placeholder="What the blog about" name="title" />
                    <textarea name="blog" id="" className="outline-none pt-3 focus:border-2 focus:border-gray-400 focus:rounded-sm bg-gray-50 p-2 h-[70vh]" placeholder="Write down your thoughts...." cols={10} rows={10}>

                    </textarea>
                    <span className="flex items-center">
                    <input type="file" className="hidden" id="file" />
                    <label className=" cursor-pointer" htmlFor="file">
                        <img src={"https://i.ibb.co/Yb1GxFc/icons8-image-30.png"} alt="" />
                    </label>
                        <input className="bg-[#31473a] cursor-pointer text-white flex ms-4 ps-[6px] w-16 p-1 rounded-sm" type="submit" value="Publish" />
                    </span>
                </form>
            </section>
        </>
    );
};

export default AddBlog;