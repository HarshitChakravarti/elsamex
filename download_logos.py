import urllib.request
import os

logos = {
    "nhai.png": "https://logo.clearbit.com/nhai.gov.in",
    "morth.png": "https://logo.clearbit.com/morth.nic.in",
    "adani.png": "https://logo.clearbit.com/adani.com",
    "ridcor.png": "https://logo.clearbit.com/ridcor.in",
    "maple.png": "https://logo.clearbit.com/maplehighways.com",
    "nhit.png": "https://logo.clearbit.com/nhit.co.in"
}

opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)')]
urllib.request.install_opener(opener)

for name, url in logos.items():
    try:
        urllib.request.urlretrieve(url, f"public/{name}")
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")
