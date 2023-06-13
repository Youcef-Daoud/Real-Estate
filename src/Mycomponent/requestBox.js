
function Requestbox({fullname, tel, mail, enquiry}) {
    return (
        <div class="box">
            <p>name : <span>{fullname}</span></p>
            <p>number : <a href={`tel:${tel}`}>{tel}</a></p>
            <p>email : <a href={`mailto:${tel}`}>{mail}</a></p>
            <p>enquiry for : <span>{enquiry}</span></p>
            <form action="" method="POST">
            <input
                type="hidden"
                name="request_id"
                value=""
            />
            <input
                type="submit"
                value="delete request"
                class="btn"
                onclick="return confirm('remove this request?');"
                name="delete"
            />
            <a
                href="/Viewproperty"
                class="btn"
            >view property</a>
            </form>
        </div>
    )
}

export default Requestbox;
