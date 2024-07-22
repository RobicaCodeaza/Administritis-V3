function Form({ children, onSubmit }) {
    return (
        <form
            onSubmit={onSubmit}
            className="lg: mb-4  mt-1 flex h-[50rem] w-full flex-col gap-7  overflow-auto  px-5  py-5 sm:h-auto sm:py-8 lg:w-3/4 xl:w-1/2   xl:py-6"
        >
            {children}
        </form>
    )
}

export default Form
