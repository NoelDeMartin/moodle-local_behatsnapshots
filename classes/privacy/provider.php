<?php

namespace local_behatsnapshots\privacy;

use core_privacy\local\metadata\null_provider;

class provider implements null_provider {

    public static function get_reason() : string {
        return 'privacy_pluginmetadata';
    }

}
