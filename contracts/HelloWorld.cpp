#include <eosiolib/eosio.hpp>
using namespace eosio;
using std::string;
using namespace std;

class secutrixdos : public eosio::contract {
  public:
      using contract::contract;

      // @abi action 
      void uploader( const account_name owner,const string &certname,const string &description,const string &ipfshash) {
	    require_auth(owner);
         print("uploader",";;",owner,";;",certname,";;",ipfshash,";;",description);
      }

     //@abi action
    void profile(const account_name _owner,const string &ipfspro){
	require_auth(_owner);
	print("profile",";;",_owner,";;",ipfspro);
	}
};

EOSIO_ABI(secutrixdos,(uploader)(profile))
