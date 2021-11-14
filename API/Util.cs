using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace API
{
    public static class Util
    {
        const string ProfileEndpoint = "https://bio.torre.co/api/bios/";

        internal static bool UsernameIsFound(string username, out string responsemsg)
        {
            WebClient client = new WebClient();

            responsemsg = "";
            try
            {
                client.Headers.Add("Content-Type", "text/json");

                responsemsg = client.DownloadString(Util.ProfileEndpoint + username);
            }
            catch (Exception exx)
            {
                return false;
            }
            return !string.IsNullOrWhiteSpace(responsemsg) && true;
        }
    }
}
