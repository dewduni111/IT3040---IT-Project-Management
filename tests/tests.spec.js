const { test, expect } = require('@playwright/test');

const scenarios = [

    { id: 'Pos_Fun_0001', input: 'eyaalaa enavaa, ee passee api aluth geem ekak karamu, samahara velaavata eya dhena adhahas valata loku vaedak venavaa', expected: 'එයාලා එනවා, ඒ පස්සේ අපි අලුත් ගේම් එකක් කරමු, සමහර වෙලාවට එය දෙන අදහස් වලට ලොකු වැඩක් වෙනවා' },
    { id: 'Pos_Fun_0002', input: 'mama iiye  aththammava balanna giyaa ', expected: 'මම ඊයෙ  අත්තම්මව බලන්න ගියා' },
    { id: 'Pos_Fun_0003', input: 'mama gedhara yanavaa, ehenam api heta balamu. ', expected: 'මම ගෙදර යනවා, එහෙනම් අපි හෙට බලමු.' },
    { id: 'Pos_Fun_0004', input: 'mata bath oonee, ehenam api kavadhdha yanne kiyanna ', expected: 'මට බත් ඕනේ, එහෙනම් අපි කවද්ද යන්නෙ කියන්න'},
    { id: 'Pos_Fun_0005', input: 'mata udhavvak karanna puLuvandha? ', expected: 'මට උදව්වක් කරන්න පුළුවන්ද?'},
    { id: 'Pos_Fun_0006', input: 'mata ID eka evanna. ', expected: 'මට ID එක එවන්න.'},
    { id: 'Pos_Fun_0007', input: 'mama yanna hadhanneeeya dhena adhahas valata mama samaGA panthi valata yamuhariyta loku vaedak venna puLuvn needha', expected: 'මම යන්න හදන්නේඑය දෙන අදහස් වලට මම සමඟ පන්ති වලට යමුහරිය්ට ලොකු වැඩක් වෙන්න පුළුව්න් නේද'},
    { id: 'Pos_Fun_0008', input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee. ', expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.'},
    { id: 'Pos_Fun_0009', input: 'mama laeptop ekee vayifayi eka kanekt karanna amaaruyi adha. ', expected: 'මම ලැප්ටොප් එකේ වයිෆයි එක කනෙක්ට් කරන්න අමාරුයි අද.'},
    { id: 'Pos_Fun_0010', input: 'verifikeeShan karanna SMS eken aapu OTP eka dhaanna. ', expected: 'වෙරිෆිකේෂන් කරන්න SMS එකෙන් ආපු OTP එක දාන්න.'},
    { id: 'Pos_Fun_0011', input: '2026-05-21 yunivarsiti ekee viBhaaga thiyenavaa. ', expected: '2026-05-21 යුනිවර්සිටි එකේ විභාග තියෙනවා.'},
    { id: 'Pos_Fun_0012', input: 'ehema vaeda karanna hari amaaruyi kiyalaa hithenavaa, namuth eka eka dhee tika tika karagena yadhdhii chuttak chuttak hariyaagena yanavaa kiyalaa mata theeruNaa. ', expected: 'එහෙම වැඩ කරන්න හරි අමාරුයි කියලා හිතෙනවා, නමුත් එක එක දේ ටික ටික කරගෙන යද්දී චුට්ටක් චුට්ටක් හරියාගෙන යනවා කියලා මට තේරුණා.'},
    { id: 'Pos_Fun_0013', input: 'mama iiyee gedhara giyaa, iita passee api naetum panthi giyaa, hari loku dheyak kalin vaedak karapu eka.', expected: 'මම ඊයේ ගෙදර ගියා, ඊට පස්සේ අපි නැටුම් පන්ති ගියා, හරි ලොකු දෙයක් කලින් වැඩක් කරපු එක.'},
    { id: 'Pos_Fun_0014', input: 'mama dhaen vaeda karanavaa, api samahara velaavata ekva kaeema kanavaa, eyaa hariyata samahara velavata hinahavenava aehenavaa. ', expected: 'මම දැන් වැඩ කරනවා, අපි සමහර වෙලාවට එක්ව කෑම කනවා, එයා හරියට සමහර වෙලවට හිනහවෙනව ඇහෙනවා.'},
    { id: 'Pos_Fun_0015', input: 'mata oona adha tikak rilaeks venna, mokadha udhee iDHAlaa hariyata vaeda kaLa nisaa godak mahansiyi. poddak inna kiyalaa mama gedhara aavama hithuvaa, ehema vuNath mithuran kool karalaa gihin enna kiyalaa kivvaa. passee api ekka kaeema kanna giyaa, ehema giyaama mata bayak naehae, mokadha okkoma aya samaGA innee kiyalaa hithuNaa. ehema nisaa api hariyata vaeda karalaa velaavata gedhara aavoth loku prashnayak vennee naehae kiyalaa mata theeruNaa.', expected: 'මට ඕන අද ටිකක් රිලැක්ස් වෙන්න, මොකද උදේ ඉඳලා හරියට වැඩ කළ නිසා ගොඩක් මහන්සියි. පොඩ්ඩක් ඉන්න කියලා මම ගෙදර ආවම හිතුවා, එහෙම වුණත් මිතුරන් කෝල් කරලා ගිහින් එන්න කියලා කිව්වා. පස්සේ අපි එක්ක කෑම කන්න ගියා, එහෙම ගියාම මට බයක් නැහැ, මොකද ඔක්කොම අය සමඟ ඉන්නේ කියලා හිතුණා. එහෙම නිසා අපි හරියට වැඩ කරලා වෙලාවට ගෙදර ආවොත් ලොකු ප්‍රශ්නයක් වෙන්නේ නැහැ කියලා මට තේරුණා.'},
    { id: 'Pos_Fun_0016', input: 'dhaenma sellam karanna eLiyata yanna epaa. ', expected: 'දැන්ම සෙල්ලම් කරන්න එළියට යන්න එපා.'},
    { id: 'Pos_Fun_0017', input: 'kavadhaadha oyaa ennee? ', expected: 'කවදාද ඔයා එන්නේ?'},
    { id: 'Pos_Fun_0018', input: 'mamagedhara yanavaa. kohomadha oyaa? ', expected: 'මමගෙදර යනවා. කොහොමද ඔයා?'},
    { id: 'Pos_Fun_0019', input: 'mema gdhra ynva adhe ofis ekta ghin boss ekk ekka mtng ekk thynnva kyla kynva', expected: 'මෙම ග්ද්‍ර ය්න්ව අදෙ ඔෆිස් එක්ට ග්හින් boss එක්ක් එක්ක ම්ට්න්ග් එක්ක් ත්ය්න්න්ව ක්ය්ල ක්ය්න්ව'},
    { id: 'Pos_Fun_0020', input: 'mamagedharayanaavaadha?oyaaekkayamu. ', expected: 'මමගෙදරයනාවාද?ඔයාඑක්කයමු.'},
    { id: 'Pos_Fun_0021', input: 'eeyi, ooka balanna ', expected: 'ඒයි, ඕක බලන්න'},
    { id: 'Pos_Fun_0022', input: 'api passee kathaa karamu. ', expected: 'අපි පස්සේ කතා කරමු.'},
    { id: 'Pos_Fun_0023', input: 'api heta ofis ekata yanavaa. ', expected: 'අපි හෙට ඔෆිස් එකට යනවා.'},
    { id: 'Pos_Fun_0024', input: 'hariyata check karanna venava email eka boss kenek evala thibenaavadha kiyalaa. ', expected: 'හරියට check කරන්න වෙනව email එක boss කෙනෙක් එවල තිබෙනාවද කියලා.'},

    { id: 'Neg_Fun_0001', input: 'WhatsApp maeseag eka evannapuLuvandha? ', expected: 'WhatsApp මැසේජ් එක එවන්න පුළුවන්ද?'},
    { id: 'Neg_Fun_0002', input: 'hri hri lku prblm ekk thynnv ', expected: 'හරි හරි ලොකු ප්‍රශ්නයක් තියෙනවා' },
    { id: 'Neg_Fun_0003', input: 'mama adha udhee office ekata giyaa, ehenam mata theeruNaa meeting  eka cancel karalaa thibennee kiyalaa. eekayi mata hari asaaDhaaraNa hithuNaa. api mehema plaeen karalaa hitiyee naehae. mama bos ekka kathaa kaLaa saha eyaa kiyalaa thibuNaa eeka klayant athin problam ekak thibilaa kiyalaa. ehenam api heta venavaa projekt eka gaena karanna puLuvan vidhiyak balanna hithan innee. ', expected: 'මම අද උදේ office එකට ගියා, එහෙනම් මට තේරුණා meeting  එක cancel  කරලා තිබෙන්නේ කියලා. ඒකයි මට හරි අසාධාරණ හිතුණා. අපි මෙහෙම plan කරලා හිටියේ නැහැ. මම බොස් එක්ක කතා කළා සහ එයා කියලා තිබුණා ඒක client අතින් ප්‍රොබ්ලම් එකක් තිබිලා කියලා. එහෙනම් අපි හෙට වෙනවා project එක ගැන කරන්න පුළුවන් විදියක් බලන්න හිතන් ඉන්නේ.' },
    { id: 'Neg_Fun_0004', input: 'mama USD1500 kanvert karanavai iita passee rupiyal5343 thiyenavaa,hariyata karansi chekkaramu, eya lassanayi needha, mama saha api tayim eka udhee 7.30 ta set karamu, eya dhena dhavas valata dhaval 12.00 kiyalaayi peenavane. ', expected: 'මම USD1500 කන්වර්ට් කරනවා, ඊට පස්සේ රුපියල්5343 තියෙනවා,හරියට කරන්සි චෙක්කරමු, එය ලස්සනයි නේද, මම සහ අපි ටයිම් එක උදේ 7.30 ට සෙට් කරමු, එය දෙන දවස් වලට දවල් 12.00 කියලායි පේනවනෙ.'},
    { id: 'Neg_Fun_0005', input: 'adha udhaeesana dhivayinapuraa vaesssahasuLi kuNaatuva nisaa bohoma pradheesha valata loku balapaeemak aethi vuNaa kiyalaa vaarthaa paLa vuNaa. koLaBA saha avata praDhaana maarga kihipayak jalayen yatavii thibuNa athara thadhabadhaya adu karanna polisiya saha RDA (maarga sQQvarDhana aDhikaariya) visheeSha kriyaa maargayak yodhalaa thibuNaa. prajaava eLiyata yana eka adu karanna kiyalaa avaDhaaraNaya kaLaa.', expected: 'අද උදෑසන දිවයින පුරා වැස්ස සහ සුළි කුණාටුව නිසා බොහොම ප්‍රදේශ වලට ලොකු බලපෑමක් ඇති වුණා කියලා වාර්තා පළ වුණා. කොළඹ සහ අවට ප්‍රධාන මාර්ග කිහිපයක් ජලයෙන් යටවී තිබුණ අතර තදබදය අඩු කරන්න පොලිසිය සහ RDA (මාර්ග සංවර්ධන අධිකාරිය) විශේෂ ක්‍රියා මාර්ගයක් යොදලා තිබුණා. ප්‍රජාව එළියට යන එක අඩු කරන්න කියලා අවධාරණය කළා.'},
    { id: 'Neg_Fun_0006', input: 'adha bisnas saha IT vaarthaa valata anuva aluth dijital geviimee kramaveedha bohoo vYaapaara valin haDHAunvaa dhii thibenavaa kiyalaa kiyanna puLuvan. QR payments, POS maeShin saha mobayil aeps Bhaavithaya nisaa paariBhoogikayaata ikman saha pahasu seevaavak laebena athara podi kada valin pavaa kaeeSh (mudhal) adu karalaa dijital valata maaru venna kiyalaa vaarthaa karalaa thiyenavaa. ', expected: 'අද බිස්නස් සහ IT වාර්තා වලට අනුව අලුත් ඩිජිටල් ගෙවීමේ ක්‍රමවේද බොහෝ ව්‍යාපාර වලින් හඳුන්වා දී තිබෙනවා කියලා කියන්න පුළුවන්. QR payments, POS මැෂින් සහ මොබයිල් ඇප්ස් භාවිතය නිසා පාරිභෝගිකයාට ඉක්මන් සහ පහසු සේවාවක් ලැබෙන අතර පොඩි කඩ වලින් පවා කෑෂ් (මුදල්) අඩු කරලා ඩිජිටල් වලට මාරු වෙන්න කියලා වාර්තා කරලා තියෙනවා.'},
    { id: 'Neg_Fun_0007', input: 'adha udhee mama avadhi vuNaama hoDHA sithak ekka dhavasa patan gaththaa saha gedhara vaeda tika hariyata karagaththaa. passee velaava hariyata plaeen karalaa adha dhina thiyena kaarYAyan siyalla kramaanukuulava sidhu kaLaa. ema kriyaakaarakam siyalla hariyata sidhu vuNa nisaa mama sathutata path vuNaa, ee sathutin mama dhinaya gatha kaLaa. ', expected: 'අද උදේ මම අවදි වුණාම හොඳ සිතක් එක්ක දවස පටන් ගත්තා සහ ගෙදර වැඩ ටික හරියට කරගත්තා. පස්සේ වෙලාව හරියට ප්ලෑන් කරලා අද දින තියෙන කාර්යයන් සියල්ල ක්‍රමානුකූලව සිදු කළා. එම ක්‍රියාකාරකම් සියල්ල හරියට සිදු වුණ නිසා මම සතුටට පත් වුණා, ඒ සතුටින් මම දිනය ගත කළා.'},
    { id: 'Neg_Fun_0008', input: 'vidhuhalpathithumaniaDhYAyana podhu sahathika pathra usaspeLa viBhaagaya saDHAhaa ayadhum kiriimata, apa vidhYaalayee igenuma labana mevara usas peLa viBhaagayata penii sitiimata sudhusukam laebuu sisun paemiNiya yuthu dhinaya, veelaava saha anekuth visheeSha karuNu dhaenum dhena men kaaruNikava illaa sitimi. ', expected: 'විදුහල්පතිතුමනි,අධ්‍යයන පොදු සහතික පත්‍ර උසස් පෙළ විභාගය සඳහා අයදුම් කිරීමට, අප විද්‍යාලයේ ඉගෙනුම ලබන මෙවර උසස් පෙළ විභාගයට පෙනී සිටීමට සුදුසුකම් ලැබූ සිසුන් පැමිණිය යුතු දිනය, වේලාව සහ අනෙකුත් විශේෂ කරුණු දැනුම් දෙන මෙන් කාරුණිකව ඉල්ලා සිටිමි.'},
    { id: 'Neg_Fun_0009', input: 'oyaata kohomadha? mama balaaporoththu venavaa oyaa hoDHAin innavaa kiyalaa. oyaa kavadhaadha enna hithan innee? apith ekka film ekak balanna yanna puLuvandha kiyalaa mama ahanna hitiyee. oyaata puLuvannam dhinayak dhaagena api yamu.', expected: 'ඔයාට කොහොමද? මම බලාපොරොත්තු වෙනවා ඔයා හොඳින් ඉන්නවා කියලා. ඔයා කවදාද එන්න හිතන් ඉන්නේ? අපිත් එක්ක ෆිල්ම් එකක් බලන්න යන්න පුළුවන්ද කියලා මම අහන්න හිටියේ. ඔයාට පුළුවන්නම් දිනයක් දාගෙන අපි යමු.'},
    { id: 'Neg_Fun_0010', input: 'mamayi gedharayi yanavaayi, eyaayi ekkayi ofis ekatayi gihinYi kaeema kannayi yanavaayi. ', expected: 'මමයි ගෙදරයි යනවායි, එයායි එක්කයි ඔෆිස් එකටයි ගිහින්යි කෑම කන්නයි යනවායි.'}



];

test.describe('Singlish Translation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'load', 
            timeout: 60000 
        });
    });

    for (const data of scenarios) {
        test(`Testing ${data.id} - ${data.input}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            
            await page.waitForTimeout(1000);
            await inputField.fill(''); 
            await inputField.fill(data.input); 

            await page.waitForTimeout(5000); 

            const outputField = page.locator('.card').filter({ hasText: 'Sinhala' }).locator('div.whitespace-pre-wrap');
            const actualText = (await outputField.innerText()).trim();

            console.log(`Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`);

            expect(actualText).toBe(data.expected);
        });
    }
});