import styles from "./StreetLightDetails.module.css";
import lights from "./media/Strreet-light-images/lights.jpg";

function StreetLightDetails() {
    return (
        <div><div className={styles.container}>

    
        <header>
            <h1>Track Your Street Light</h1>
        </header>
        <section className={styles.searchSection}>
            <input type="text" placeholder="Search for street lights..." id={styles.searchBar}/>
            <button id={styles.searchBtn}>Search</button>
        </section>
        <section className={styles.tableSection}>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={lights} alt="Street Light 1"/></td>
                        <td>Street Light 1</td>
                        <td>Location 1</td>
                        <td>
                            <button className={styles.viewBtn}>View Details</button>
                            <button className={styles.buyBtn}>Buy Premium</button>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={lights} alt="Street Light 2"/></td>
                        <td>Street Light 2</td>
                        <td>Location 2</td>
                        <td>
                            <button className={styles.viewBtn}>View Details</button>
                            <button className={styles.buyBtn}>Buy Premium</button>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={lights} alt="Street Light 3"/></td>
                        <td>Street Light 3</td>
                        <td>Location 3</td>
                        <td>
                            <button className={styles.viewBtn}>View Details</button>
                            <button className={styles.buyBtn}>Buy Premium</button>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={lights} alt="Street Light 4"/></td>
                        <td>Street Light 4</td>
                        <td>Location 4</td>
                        <td>
                            <button className={styles.viewBtn}>View Details</button>
                            <button className={styles.buyBtn}>Buy Premium</button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </section>
        <section className={styles.pricingSection}>
            <h2>Premium Plans</h2>
            <div className={styles.pricingPlans}>
                <div className={styles.plan}>
                    <h3>Basic Plan</h3>
                    <p>$9.99/month</p>
                    <ul>
                        <li>Access to basic street lights</li> 
                        <li>light tracking features</li>
                        <li>Email support</li>
                    </ul>
                    <button>Choose Plan</button>
                </div>
                <div className={styles.plan}>
                    <h3>Standard Plan</h3>
                    <p>$19.99/month</p>
                    <ul>
                        <li>Access to all basic features</li>
                        <li>Real-time notifications</li>
                        <li>Priority email support</li>
                    </ul>
                    <button>Choose Plan</button>
                </div>
                <div className={styles.plan}>
                    <h3>Premium Plan</h3>
                    <p>$29.99/month</p>
                    <ul>
                        <li>All Standard Plan features</li>
                        <li>Dedicated account manager</li>
                        <li>24/7 customer support</li>
                    </ul>
                    <button>Choose Plan</button>
                </div>
            </div>
        </section>
        <section className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <button id={styles.faqBtn}>View FAQs</button>
        </section>
        <footer>
            <p>&copy; 2024 Track Your Street Light. All rights reserved.</p>
        </footer>
    </div></div>
    )
}

export default StreetLightDetails;