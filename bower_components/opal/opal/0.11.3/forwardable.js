/* Generated by Opal 0.11.3 */
Opal.modules["forwardable"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$each', '$respond_to?', '$def_instance_delegator', '$include?', '$start_with?', '$to_s', '$define_method', '$__send__', '$instance_variable_get', '$to_proc', '$def_single_delegator', '$define_singleton_method']);
  
  (function($base, $parent_nesting) {
    var $Forwardable, self = $Forwardable = $module($base, 'Forwardable');

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Forwardable_instance_delegate_3, TMP_Forwardable_def_instance_delegators_5, TMP_Forwardable_def_instance_delegator_8;

    
    
    Opal.defn(self, '$instance_delegate', TMP_Forwardable_instance_delegate_3 = function $$instance_delegate(hash) {
      var TMP_1, self = this;

      return $send(hash, 'each', [], (TMP_1 = function(methods, accessor){var self = TMP_1.$$s || this, TMP_2;
if (methods == null) methods = nil;if (accessor == null) accessor = nil;
      
        if ($truthy(methods['$respond_to?']("each"))) {
          } else {
          methods = [methods]
        };
        return $send(methods, 'each', [], (TMP_2 = function(method){var self = TMP_2.$$s || this;
if (method == null) method = nil;
        return self.$def_instance_delegator(accessor, method)}, TMP_2.$$s = self, TMP_2.$$arity = 1, TMP_2));}, TMP_1.$$s = self, TMP_1.$$arity = 2, TMP_1))
    }, TMP_Forwardable_instance_delegate_3.$$arity = 1);
    
    Opal.defn(self, '$def_instance_delegators', TMP_Forwardable_def_instance_delegators_5 = function $$def_instance_delegators(accessor, $a_rest) {
      var TMP_4, self = this, methods;

      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      methods = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        methods[$arg_idx - 1] = arguments[$arg_idx];
      }
      return $send(methods, 'each', [], (TMP_4 = function(method){var self = TMP_4.$$s || this;
if (method == null) method = nil;
      
        if ($truthy(["__send__", "__id__"]['$include?'](method))) {
          return nil;};
        return self.$def_instance_delegator(accessor, method);}, TMP_4.$$s = self, TMP_4.$$arity = 1, TMP_4))
    }, TMP_Forwardable_def_instance_delegators_5.$$arity = -2);
    
    Opal.defn(self, '$def_instance_delegator', TMP_Forwardable_def_instance_delegator_8 = function $$def_instance_delegator(accessor, method, ali) {
      var TMP_6, TMP_7, self = this;

      if (ali == null) {
        ali = method;
      }
      if ($truthy(accessor.$to_s()['$start_with?']("@"))) {
        return $send(self, 'define_method', [ali], (TMP_6 = function($a_rest){var self = TMP_6.$$s || this, block, args;

          block = TMP_6.$$p || nil;
          if (block) TMP_6.$$p = null;
          var $args_len = arguments.length, $rest_len = $args_len - 0;
          if ($rest_len < 0) { $rest_len = 0; }
          args = new Array($rest_len);
          for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
            args[$arg_idx - 0] = arguments[$arg_idx];
          }
        return $send(self.$instance_variable_get(accessor), '__send__', [method].concat(Opal.to_a(args)), block.$to_proc())}, TMP_6.$$s = self, TMP_6.$$arity = -1, TMP_6))
        } else {
        return $send(self, 'define_method', [ali], (TMP_7 = function($a_rest){var self = TMP_7.$$s || this, block, args;

          block = TMP_7.$$p || nil;
          if (block) TMP_7.$$p = null;
          var $args_len = arguments.length, $rest_len = $args_len - 0;
          if ($rest_len < 0) { $rest_len = 0; }
          args = new Array($rest_len);
          for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
            args[$arg_idx - 0] = arguments[$arg_idx];
          }
        return $send(self.$__send__(accessor), '__send__', [method].concat(Opal.to_a(args)), block.$to_proc())}, TMP_7.$$s = self, TMP_7.$$arity = -1, TMP_7))
      }
    }, TMP_Forwardable_def_instance_delegator_8.$$arity = -3);
    Opal.alias(self, "delegate", "instance_delegate");
    Opal.alias(self, "def_delegators", "def_instance_delegators");
    Opal.alias(self, "def_delegator", "def_instance_delegator");
  })($nesting[0], $nesting);
  return (function($base, $parent_nesting) {
    var $SingleForwardable, self = $SingleForwardable = $module($base, 'SingleForwardable');

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_SingleForwardable_single_delegate_11, TMP_SingleForwardable_def_single_delegators_13, TMP_SingleForwardable_def_single_delegator_16;

    
    
    Opal.defn(self, '$single_delegate', TMP_SingleForwardable_single_delegate_11 = function $$single_delegate(hash) {
      var TMP_9, self = this;

      return $send(hash, 'each', [], (TMP_9 = function(methods, accessor){var self = TMP_9.$$s || this, TMP_10;
if (methods == null) methods = nil;if (accessor == null) accessor = nil;
      
        if ($truthy(methods['$respond_to?']("each"))) {
          } else {
          methods = [methods]
        };
        return $send(methods, 'each', [], (TMP_10 = function(method){var self = TMP_10.$$s || this;
if (method == null) method = nil;
        return self.$def_single_delegator(accessor, method)}, TMP_10.$$s = self, TMP_10.$$arity = 1, TMP_10));}, TMP_9.$$s = self, TMP_9.$$arity = 2, TMP_9))
    }, TMP_SingleForwardable_single_delegate_11.$$arity = 1);
    
    Opal.defn(self, '$def_single_delegators', TMP_SingleForwardable_def_single_delegators_13 = function $$def_single_delegators(accessor, $a_rest) {
      var TMP_12, self = this, methods;

      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      methods = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        methods[$arg_idx - 1] = arguments[$arg_idx];
      }
      return $send(methods, 'each', [], (TMP_12 = function(method){var self = TMP_12.$$s || this;
if (method == null) method = nil;
      
        if ($truthy(["__send__", "__id__"]['$include?'](method))) {
          return nil;};
        return self.$def_single_delegator(accessor, method);}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12))
    }, TMP_SingleForwardable_def_single_delegators_13.$$arity = -2);
    
    Opal.defn(self, '$def_single_delegator', TMP_SingleForwardable_def_single_delegator_16 = function $$def_single_delegator(accessor, method, ali) {
      var TMP_14, TMP_15, self = this;

      if (ali == null) {
        ali = method;
      }
      if ($truthy(accessor.$to_s()['$start_with?']("@"))) {
        return $send(self, 'define_singleton_method', [ali], (TMP_14 = function($a_rest){var self = TMP_14.$$s || this, block, args;

          block = TMP_14.$$p || nil;
          if (block) TMP_14.$$p = null;
          var $args_len = arguments.length, $rest_len = $args_len - 0;
          if ($rest_len < 0) { $rest_len = 0; }
          args = new Array($rest_len);
          for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
            args[$arg_idx - 0] = arguments[$arg_idx];
          }
        return $send(self.$instance_variable_get(accessor), '__send__', [method].concat(Opal.to_a(args)), block.$to_proc())}, TMP_14.$$s = self, TMP_14.$$arity = -1, TMP_14))
        } else {
        return $send(self, 'define_singleton_method', [ali], (TMP_15 = function($a_rest){var self = TMP_15.$$s || this, block, args;

          block = TMP_15.$$p || nil;
          if (block) TMP_15.$$p = null;
          var $args_len = arguments.length, $rest_len = $args_len - 0;
          if ($rest_len < 0) { $rest_len = 0; }
          args = new Array($rest_len);
          for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
            args[$arg_idx - 0] = arguments[$arg_idx];
          }
        return $send(self.$__send__(accessor), '__send__', [method].concat(Opal.to_a(args)), block.$to_proc())}, TMP_15.$$s = self, TMP_15.$$arity = -1, TMP_15))
      }
    }, TMP_SingleForwardable_def_single_delegator_16.$$arity = -3);
    Opal.alias(self, "delegate", "single_delegate");
    Opal.alias(self, "def_delegators", "def_single_delegators");
    Opal.alias(self, "def_delegator", "def_single_delegator");
  })($nesting[0], $nesting);
};