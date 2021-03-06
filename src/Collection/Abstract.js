'use strict';

import Skull from 'backbone-skull';
import _ from 'underscore';

class CollectionAbstract extends Skull.Collection {
    _parentResult (propertyName) {
        let prop = super[propertyName];
        if (_.isFunction (prop)) {
            return prop.call(this);
        } else {
            return prop;
        }
    }
}

export default CollectionAbstract;