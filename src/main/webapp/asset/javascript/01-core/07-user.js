/**
 * auth : bqxu
 * create_at: 15/10/23.
 * desc:
 * note:
 *  1.
 */
(function ($w, $) {
  $w._window = {};
  var user = {
    _: {
      currentUser: {
        userId: null
      },
      currentClass: {
        classId: null
      },
      currentTenant: {
        tenantId: null
      }
    },
    setUser: function (user) {
      this._.currentUser = user;
    },
    setCurrentClass: function (classes) {
      this._.currentClass = classes;
    },
    getUserId: function () {
      return this._.currentUser.userId;
    },
    getClassId: function () {
      return this._.currentClass.classId;
    },
    getTenantId: function () {
      return this._.currentTenant.tenantId;
    }
  };
  $w.imethod.user = user;
})(window, jQuery);
