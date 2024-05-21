import React , { useState, useEffect }from 'react'
import NavBarPanel from '../../NavBarPanel';
import Select from 'react-select';
import moment from 'moment-timezone';
import './preference.css'
    
    
const Preference = () => {
    const [timezones, setTimezones] = useState([]);
    
    useEffect(() => {
        
        const allTimezones = moment.tz.names().map(zone => ({ label: zone, value: zone }));
        setTimezones(allTimezones);
    }, []);
       
    return (
        <main>
         <NavBarPanel />
            <div className='Box'>
            <fieldset>
    <h2>Change password</h2>
    <p class="Description">Set a new password by filling in your current password and a new one.</p>
    <div>
        <label for="CurPw">Current password</label>
        <input title="Current password" type="password"  autocomplete="new-password"  />
        <div class="ClearLeft"></div>
    </div>
    <div>
        <label for="NewPw">New password</label>
        <input title="New password" type="password" autocomplete="new-password" aria-invalid="false"/>
        <div class="ClearLeft"></div>
    </div>
    <div>
        <label for="NewPw1">Verify password</label>
        <input title="Verify password" type="password"  autocomplete="current-password" aria-invalid="false"/>
        <div class="ClearLeft"></div>
    </div>
    <button type="submit" id="Update" value="Update">Update</button>
</fieldset>

            </div>
            <div className='Box'>
                <fieldset>
                        <h2>Interface language</h2>
                        <p class="Description">Select the main interface language.</p>
                        <div>
                            <label for="UserLanguage">Language</label>
                            <div class="InputField_Container" tabindex="-1">
                                <div class="InputField_InputContainer">
                                    <div class="InputField_Selection">
                                    </div>
                                </div>
                            </div>
                            <select class="W70pc Modernize" id="UserLanguage" name="UserLanguage">
                                <option value="id">Bahasa Indonesia - Indonesian</option>
                                <option value="ca">Català - Catalan (in process)</option>
                                <option value="da">Dansk - Danish</option>
                                <option value="de">Deutsch - German</option>
                                <option value="et">Eesti - Estonian (in process)</option>
                                <option value="en_CA">English (Canada)</option>
                                <option value="en_GB">English (United Kingdom)</option>
                                <option value="en">English (United States)</option>
                                <option value="es_CO">Español (Colombia) - Spanish (Colombia)</option>
                                <option value="es_MX">Español (México) - Spanish (Mexico)</option>
                                <option value="es">Español - Spanish</option>
                                <option value="fr_CA">Français (Canada) - French (Canada)</option>
                                <option value="fr">Français - French</option>
                                <option value="gl">Galego - Galician</option>
                                <option value="hr">Hrvatski - Croatian (in process)</option>
                                <option value="it">Italiano - Italian</option>
                                <option value="sw">Kiswahili - Swahili</option>
                                <option value="lv">Latvijas - Latvian (in process)</option>
                                <option value="lt">Lietuvių kalba - Lithuanian (in process)</option>
                                <option value="hu">Magyar - Hungarian</option>
                                <option value="ms">Melayu - Malay</option>
                                <option value="mk">Mакедонски - Macedonian</option>
                                <option value="nl">Nederlandse - Dutch</option>
                                <option value="nb_NO">Norsk bokmål - Norwegian</option>
                                <option value="pl">Polski - Polish</option>
                                <option value="pt">Português - Portuguese</option>
                                <option value="pt_BR">Português Brasileiro - Portuguese (Brasil)</option>
                                <option value="ro">Română - Romanian</option>
                                <option value="sk_SK">Slovenčina - Slovak (in process)</option>
                                <option value="sl">Slovenščina - Slovenian (in process)</option>
                                <option value="sr_Latn">Srpski - Serbian Latin</option>
                                <option value="fi">Suomi - Finnish (in process)</option>
                                <option value="sv">Svenska - Swedish</option>
                                <option value="tr">Türkçe - Turkish (in process)</option>
                                <option value="vi_VN">ViɆt Nam - Vietnam (in process)</option>
                                <option value="cs">Česky - Czech</option>
                                <option value="el">Ελληνικά - Greek (in process)</option>
                                <option value="bg">Български - Bulgarian (in process)</option>
                                <option value="ru">Русский - Russian</option>
                                <option value="sr_Cyrl">Српски - Serbian Cyrillic</option>
                                <option value="uk">Українська - Ukrainian</option>
                                <option value="he">עברית - Hebrew (in process)</option>
                                <option value="ar_SA">العَرَبِية‎ - Arabic (Saudi Arabia) (in process)</option>
                                <option value="fa">فارسى - Persian</option>
                                <option value="hi">हिन्दी - Hindi</option>
                                <option value="th_TH">ภาษาไทย - Thai</option>
                                <option value="ja">日本語 - Japanese</option>
                                <option value="zh_TW">正體中文 - Chinese (Traditional)</option>
                                <option value="zh_CN">简体中文 - Chinese (Simplified)</option>
                                <option value="ko">한국어 - Korean</option>
                            </select>
                            
                        </div>
                        <button type="submit" id="UserLanguageUpdate" value="Update">Update</button>
                </fieldset>
            </div>
            <div className='Box'>
                <fieldset>
                        <h2>Time Zone</h2>
                        <p class="Description">Select your personal time zone. All times will be displayed relative to this time zone.</p>
                        <div>
                            <label for="TimeZone">Time Zone</label>
                            <div class="InputField_Container" tabindex="-1"><div class="InputField_InputContainer"><div class="InputField_Selection">
                            </div></div></div>
                            <div className='ha'>
                            {/* <Select class="Modernize" id="UserTimeZone" name="UserTimeZone" options={timezones}/> */}
                            <Select options={timezones} />
                            </div>
                            
                        </div>
                        <button type="submit" id="UserTimeZoneUpdate" value="Update">Update</button>
                </fieldset>
            </div>
            <div className='Box'>
                <fieldset>
                        <h2>Ticket overview</h2>
                        <p class="Description">Select after which period ticket overviews should refresh automatically.</p>
                        <div>
                            <label for="UserRefreshTime">Refresh interval</label>
                            <div class="InputField_Container" tabindex="-1">
                                <div class="InputField_InputContainer">
                                    {/* <input id="UserRefreshTime_Search" class="InputField_Search" type="text" role="search" autocomplete="off" aria-label="Refresh interval"/> */}
                                <div class="InputField_Selection" ></div></div></div>
                            <select class=" Modernize" id="UserRefreshTime" name="UserRefreshTime">
                            <option value="2">2 minutes</option>
                            <option value="5">5 minutes</option>
                            <option value="7">7 minutes</option>
                            <option value="10">10 minutes</option>
                            <option value="15">15 minutes</option>
                            <option value="0">off</option>
                        </select>
                            
                        </div>
                        <button type="submit" id="UserRefreshTimeUpdate" value="Update">Update</button>
                </fieldset>
            </div>
            <div className='Box'>
                <fieldset>
                        <h2>Number of displayed tickets</h2>
                        <p class="Description">Select how many tickets should be shown in overviews by default.</p>
                        <div>
                            <label for="UserShowTickets">Tickets per page</label>
                            <div class="InputField_Container" tabindex="-1"><div class="InputField_InputContainer"><div class="InputField_Selection" ></div></div></div>
                            <select class=" Modernize" id="UserShowTickets" name="UserShowTickets" >
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            </select>
                            
                        </div>
                        <button type="submit" id="UserShowTicketsUpdate" value="Update">Update</button>
                </fieldset>
            </div>
            <div id="Footer" >
      <a href="https://www.autointelli.com/" target="_blank">
       <img src="https://github.com/srikanth251998/go/blob/6797343617a64dc6929c6f5002e51fab848b1bfa/auto-intelli-logo.png?raw=true" style={{ maxWidth: '210px', maxHeight: '100px' ,textAlign:"center"}} alt="Autointelli" title="Autointelli"/></a>
       <div class="Clear">
       <a href="https://www.autointelli.com/" target="_blank" title="Autointelli"  style={{marginbottom :'0px' }}>
        2024 All rights reserved Autointelli</a> 
      </div>
      </div>
    
    </main>
    );
}
    
export default Preference
