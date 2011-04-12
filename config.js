{
	
	"blog" : {
		"media" : "/media",
		"root" : "/blog",
		"host" : "localhost:8080",
		"connection_string" : "sqlite3:db=cppcms.db;@pool_size=10",
		//"connection_string" : "mysql:database=cppcms;user=root;password=root;@pool_size=10;@use_prepared=on"
		"tex" : {
			"enable" : true,
			//"latex" : "/usr/bin/latex",
			// "dvigif" : "/usr/bin/dvigif",
			// "temp_dir" : "/tmp",
			// "output_dir" : "/var/www/media/tex"
		}
	},
	"service" : {
		"api" : "http",
		"port" : 8080
	},
	"http" : {
		"script" : "/blog" 
	},
	"views" : {
		 "default_skin" : "contendend" ,
		 "paths" : [ "./" ],
		 "skins" : [ "contendend" ],
	},
	"file_server" : {
		"enable" : true,
		"document_root" : "../"
	},
	"session" : {
		"expire" : "renew",
		"timeout" : 604800, // a week
		"location" : "both",
		"client" : {
			"hmac" : "sha1",
			"hmac_key" : "232074faa0fd37de20858bf8cd0a7d10"
		},
		"server" : {
			"storage" : "files"
		}
	},
	"cache" : {
		"backend" : "thread_shared",
		"limit" : 100,
	},
	"localization" : {
		"messages" : {
			"paths" : [ "./locale" ],
			"domains" : [ "blog" ]
		},
		"locales" : [ 
			"he_IL.UTF-8",
			"en_US.UTF-8",
		]
	}
}
