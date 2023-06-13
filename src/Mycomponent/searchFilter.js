function Searchfilter() {
    let Willay = [
        "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", 
        "Batna", "Bejaïa", "Biskra", "Béchar",
        "Blida", "Bouira", "Tamanrasset", "Tebessa", 
        "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger",
        "Djelfa", "Djijel", "Sétif", "Saïda",
        "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
        "Constantine", "Médéa", "Mostaganem", "M'Sila",
        "Mascara", "Ouargla", "Oran", "El Bayadh", 
        "Illizi", "Bordj Bou Arreridj", "Boumerdès", "El Tarf",
        "Tindouf", "Tissemsilt", "El Oued", "Khenchela",
        "Souk Ahras", "Tipaza", "Mila", "Aïn Defla",
        "Naâma", "Aïn Témouchent", "Ghardaia", "Relizane",
        "Timimoune", "Bordj Badji Mokhtar", "Béni Abbès", "Ouled Djellal", 
        "In salah", "In Guezzam", "Touggourt", "Djanet", 
        "El M'Ghair", "El Menia"
    ]
    return (
        /* search filter section starts */
        <section class="filters">
            <form action="/annonces" method="post">
                <div id="close-filter"><i class="fas fa-times"></i></div>
                <h3>filter your search</h3>
                <div class="flex">
                <div class="box">
                    <p>property type</p>
                    <select name="h_type" class="input" required>
                        <option value="flat">flat</option>
                        <option value="house">house</option>
                        <option value="shop">shop</option>
                    </select>
                    </div>
                    <div class="box">
                    <p>offer type</p>
                    <select name="h_offer" class="input" required>
                        <option value="Sale">Sale</option>
                        <option value="Exchange">Exchange</option>
                        <option value="Rent">Rent</option>
                    </select>
                </div>
                <div class="box">
                    <p>Willaya</p>
                    <select name="willaya" class="input" required>
                    {
                        Willay.map((value)=>{
                            return <option value={value}>{value}</option>
                        }, this)
                    }
                    </select>
                </div>
                <div class="box">
                    <p>Communite</p>
                    <input type="communite" name="communite" class="input"/>
                </div>
                <div class="box">
                    <p>maximum budget</p>
                    <select name="h_min" class="input" required>
                        <option value="10000">10K DZD</option>
                        <option value="20000">20K DZD</option>
                        <option value="30000">30K DZD</option>
                        <option value="40000">40K DZD</option>
                        <option value="50000">50K DZD</option>
                        <option value="60000">60K DZD</option>
                        <option value="70000">70K DZD</option>
                        <option value="80000">80K DZD</option>
                        <option value="90000">90K DZD</option>
                        <option value="100000">100K DZD</option>
                        <option value="200000">200K DZD</option>
                        <option value="300000">300K DZD</option>
                        <option value="400000">400K DZD</option>
                        <option value="500000">500K DZD</option>
                        <option value="600000">600K DZD</option>
                        <option value="700000">700K DZD</option>
                        <option value="800000">800K DZD</option>
                        <option value="900000">900K DZD</option>
                        <option value="1000000">1M DZD</option>
                        <option value="2000000">2M DZD</option>
                        <option value="3000000">3M DZD</option>
                        <option value="4000000">4M DZD</option>
                        <option value="5000000">5M DZD</option>
                        <option value="6000000">6M DZD</option>
                        <option value="7000000">7M DZD</option>
                        <option value="8000000">8M DZD</option>
                        <option value="9000000">9M DZD</option>
                        <option value="10000000">10M DZD</option>
                        <option value="20000000">20M DZD</option>
                        <option value="30000000">30M DZD</option>
                        <option value="40000000">40M DZD</option>
                        <option value="50000000">50M DZD</option>
                        <option value="60000000">60M DZD</option>
                        <option value="70000000">70M DZD</option>
                        <option value="80000000">80M DZD</option>
                        <option value="90000000">90M DZD</option>
                        <option value="100000000">100M DZD</option>
                        <option value="150000000">150M DZD</option>
                        <option value="200000000">200M DZD</option>
                    </select>
                </div>
                <div class="box">
                    <p>Date</p>
                    <input type="date" name="date" class="input"/>
                </div>
            </div>
            <input type="submit" value="search property" name="search" class="btn"/>
        </form>
    </section>
    /* search filter section ends */
    )
}

export default Searchfilter;