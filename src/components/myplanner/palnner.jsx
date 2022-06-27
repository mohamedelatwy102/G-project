import './planner.css'
const Myplanner = () => {
    return (
        <>
            <section className="timer">
                <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_rupg3acu.json" background="transparent"
                    speed="1"
                    style={{
                        maxWidth: '500px',
                        height: '400px',
                        margin: 'auto'
                    }}
                    loop
                    autoplay>
                </lottie-player>
            </section>
            <section className="form-timer">
                <form action="" method="post">
                    <div className="control">
                        <input type="text" name="treatment" placeholder="Enter Treatment Name" />
                    </div>
                    <div className="control">
                        <input type="time" name="clock" defaultValue='00:00' />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </section>
        </>
    );
}

export default Myplanner;