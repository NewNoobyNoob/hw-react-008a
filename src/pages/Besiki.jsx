// import { Link } from "react-router-dom"; // removed from here as done via seperate LinkLayout.jsx file

const Besiki = () => {
    return (
        <div>
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}

            {/* we should not use <a> tags in react as it will think that we by default are redirected to the new page/site and not to the page within the same site, hence cousing pages to refresh. to avoid above in react we use <link> tags instead of <a> tags! */}

            {/* again, removed from here as done via seperate LinkLayout.jsx file */}

            {/* <Link to={'/'}>Home </Link>
            <Link to={'/about'}> About</Link> */}

            {/* actually we can remove links from here and do them with Layout Route within seperate file LinkLayout.jsx as they are common for several pages. The same we should do on any other page like AboutPage.jsx. We should remove also link imports and move to LinkLayout.jsx. */}

            <h2>გაიღვიძე საქართველო, ადექ, ტანი დაძარი! | ბესიკ ხარანაული</h2>
            <pre>
            <h3>ჩემი ხმა</h3> <br />

                გაიღვიძე, საქართველო,<br />
                ადექ, ტანი დაძარი!<br />
                <br />
                ქოსატყუილები რომ გყავს<br />
                ბრძენკაცებად დამსხდარი,<br />
                ეშმაკებით რომ გაქვს სავსე<br />
                ცარიელი ტაძარი,<br />
                ცეცხლი გამონელებული,<br />
                დარჩენილი ნაცარი,<br />
                იმის კვალიც რომ იშლება,<br />
                აბა, ქარი სად არი,<br />
                მიწა მუჭით შეიჭმება,<br />
                ეს ანდაზაც მზად არი,<br />
                სახლი, კარი, ცა, ხმელეთი,<br />
                კაცის სახე რაც არი,<br />
                ტყეები გაგეჩეხება,<br />
                დაგემხობა ცა-მყარი,<br />
                სუყველა მტრად გაგიხდება,<br />
                მშიერი და მაძღარი,<br />
                არაფერი დაგირჩება<br />
                იყოს დაუტაცარი,<br />
                სინდისი დაგეკარგება,<br />
                ძაფი შუა გამწყდარი.<br />
                <br />
                გაიღვიძე, საქართველო,<br />
                ადექ, ტანი დაძარი!<br />
                <br />
                ყველას შენზე უფრო ღვიძავს,<br />
                ყველა უფრო მზად არი,<br />
                რომ გადაკერ-გადმოკეროს<br />
                შენი მიწა მთა-ბარი,<br />
                შენ წვრილმანებზე დარბიხარ,<br />
                რაც კაცისა არც არი,<br />
                კიბეებზე აკინძულან<br />
                გიენა თუ აფთარი,<br />
                კიბის ძირში შენა დგახარ,<br />
                შიშისაგან დამდნარი.<br />
                <br />
                გაიღვიძე საქართველო,<br />
                ადექ, ტანი დაძარი!<br />
                <br />
                ჭკუით გაისიგრძეგანე<br />
                სინამდვილე რაც არი,<br />
                ამდენ თავისმოტყუებით,<br />
                რაც სიზმარი არც არი,<br />
                ამდენი თვალის დახუჭვით,<br />
                მერამდენე ზამთარი,<br />
                მერამდენ ათას ტყუილზე<br />
                უნდა მიხვდე მართალი,<br />
                ქალი სხვაგან მხევალია,<br />
                კაცი სხვაგან ყმად არი…<br />
                გაიღვიძე საქართველო,<br />
                მიწას კვერთხი დაკარი,<br />
                ამოხეთქოს იქნებ სულმა<br />
                ვინც მიწაში დაფალი,<br />
                ამოვარდეს ნიავღვარი,<br />
                გადარეცხოს მთა-ბარი,<br />
                ამონათდნენ ვარსკვლავები<br />
                ჯოჯოხეთში გამქრალი.<br />
                <br />
                გაიღვიძე, საქართველო,<br />
                ადექ, ტანი დაძარი!<br />
                </pre>
        </div>
    )
}

export default Besiki; //! all routes should be registered within router.js file!
