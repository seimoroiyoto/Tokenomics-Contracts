const axios = require("axios");
const { HttpProxyAgent, HttpsProxyAgent } = require("hpagent");
const qs = require("qs");

const proxy = `http://geonode_GfiuE6kuCt-country-IT:c905a46a-6649-48e1-b1eb-a07639977e47@premium-residential.geonode.com:9000`;
const request = async () => {

  const agentConfig = {
    proxy,
    keepAlive: true,
  };

  axios.defaults.httpAgent = new HttpProxyAgent(agentConfig);
  axios.defaults.httpsAgent = new HttpsProxyAgent(agentConfig);

  const sendData = {
    xver: "2",
    lt: "M",
    st: "nebd",
    fun: "reqclasses",
    Startdate: "2024-03-19 01:46",
    EndDate: "2028-03-19 01:46",
    list: "31",
    cl: "27985",
    uei: "1",
    nsc: "1",
    om: "0",
    ail: "0",
    type: "json",
  };

  const formData = qs.stringify(sendData);
  console.log(formData)

  /* eslint-disable */
  const options = {
    method: "POST",
    url: `https://www.vincitu.it/res/client/wbe/OfferDetails.aspx?type=json`,
    data: formData,
    headers: {
      Accept: `*/*`,
      "Accept-Encoding": `gzip, deflate, br, zstd`,
      "Accept-Language": `en-US,en;q=0.9`,
      "Content-Length": `142`,
      "Content-Type": `application/x-www-form-urlencoded; charset=UTF-8`,
      Cookie: `UserLang=it-IT; CookieFunzionali=true; CookieAnalitici=true; CookieInfo=true; _fw_crm_v=dfdec20c-91d2-4025-9d1e-2c111531d271; _hjSessionUser_2030876=eyJpZCI6IjcxM2NmNjk4LTJiODItNWQ0Ny04YWQ5LWU5ZWYzN2VmNjBhYiIsImNyZWF0ZWQiOjE3MDY1MDEyNzM2MjIsImV4aXN0aW5nIjp0cnVlfQ==; _fbp=fb.1.1706543585670.1068617121; clanguage=it; UserCulture=it-IT; ctoffset=-480; _gid=GA1.2.805422752.1711442509; league_tables={"matchid":45870785,"seasonname":"Europei"}; viewTrackerSingleEvent=_hideTracker; token=; toshow=; cf_clearance=79v97xizZ0_J42dqmG_Xc4SXlYW.Mv0fAcU3acP0AbU-1711716334-1.0.1.1-MpO6YU7riXCIj.eY_b5JU736FMf7B3ipQoAwa5jHV8yrhV2Z.QtkwV1JRCxUFEAkppQNmMzHmOHqgh1jWanhXg; ASP.NET_SessionId=wfud1hy4vw5s5wedz35yvomh; _hjSession_2030876=eyJpZCI6IjE2MTJkNDQ3LWIxMGMtNDRmYy05ZDhhLTQ3NTFkMzIzYmU2ZSIsImMiOjE3MTE3MTYzODE5ODQsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; _ga_1W2YC6K504=GS1.1.1711721674.58.1.1711721678.0.0.0; _ga=GA1.1.1947148630.1706501273`,
      Origin: `https://www.vincitu.it`,
      Referer: `https://www.vincitu.it/web/bet/`,
      "Sec-Ch-Ua": `"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"`,
      "Sec-Ch-Ua-Arch": `"x86"`,
      "Sec-Ch-Ua-Bitness": `"64"`,
      "Sec-Ch-Ua-Full-Version": `"123.0.6312.86"`,
      "Sec-Ch-Ua-Full-Version-List": `"Google Chrome";v="123.0.6312.86", "Not:A-Brand";v="8.0.0.0", "Chromium";v="123.0.6312.86"`,
      "Sec-Ch-Ua-Mobile": `?0`,
      "Sec-Ch-Ua-Model": `""`,
      "Sec-Ch-Ua-Platform": `"Windows"`,
      "Sec-Ch-Ua-Platform-Version": `"10.0.0"`,
      "Sec-Fetch-Dest": `empty`,
      "Sec-Fetch-Mode": `cors`,
      "Sec-Fetch-Site": `same-origin`,
      "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36`,
      "X-Requested-With": `XMLHttpRequest`,
    },
  };
  /* eslint-enable */

  const { data } = await axios.request(options);
  console.log(data);
};

const requestGet = async () => {

}

requestGet();
