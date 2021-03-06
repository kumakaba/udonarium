/* Generated by Opal 0.10.5 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $range = Opal.range;

  Opal.add_stubs(['$==', '$check_nD10_nomalTest', '$check_nD10_combatTest', '$>=', '$to_i', '$+', '$/', '$>', '$===', '$getDamageDice', '$debug', '$ceil', '$-', '$cthulhutech_check', '$collect', '$split', '$each', '$[]=', '$[]', '$length', '$times', '$*', '$step']);
  return (function($base, $super) {
    function $CthulhuTech(){};
    var self = $CthulhuTech = $klass($base, $super, 'CthulhuTech', $CthulhuTech);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_6, TMP_7, TMP_8, TMP_9, TMP_15;

    def.isCombatTest = nil;
    Opal.defn(self, '$initialize', TMP_1 = function $$initialize() {
      var $a, $b, self = this, $iter = TMP_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_index = nil, $zuper_length = nil;

      TMP_1.$$p = null;
      $zuper = [];
      
      for($zuper_index = 0; $zuper_index < arguments.length; $zuper_index++) {
        $zuper[$zuper_index] = arguments[$zuper_index];
      }
      ($a = ($b = self, Opal.find_super_dispatcher(self, 'initialize', TMP_1, false)), $a.$$p = $iter, $a).apply($b, $zuper);
      self.sendMode = 2;
      return self.sortType = 1;
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$gameName', TMP_2 = function $$gameName() {
      var self = this;

      return "クトゥルフテック";
    }, TMP_2.$$arity = 0);

    Opal.defn(self, '$gameType', TMP_3 = function $$gameType() {
      var self = this;

      return "CthulhuTech";
    }, TMP_3.$$arity = 0);

    Opal.defn(self, '$getHelpMessage', TMP_4 = function $$getHelpMessage() {
      var self = this;

      return "テストのダイス計算を実装。\n成功、失敗、クリティカル、ファンブルの自動判定。\nコンバットテスト(防御側有利なので「>=」ではなく「>」で入力)の時はダメージダイスも表示。\n";
    }, TMP_4.$$arity = 0);

    Opal.defn(self, '$check_nD10', TMP_5 = function $$check_nD10(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var $a, self = this;

      if ((($a = (signOfInequality['$=='](">="))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.isCombatTest = false;
        return self.$check_nD10_nomalTest(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max);};
      if ((($a = (signOfInequality['$=='](">"))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.isCombatTest = true;
        return self.$check_nD10_combatTest(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max);
        } else {
        return nil
      };
    }, TMP_5.$$arity = 8);

    Opal.defn(self, '$check_nD10_nomalTest', TMP_6 = function $$check_nD10_nomalTest(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var $a, self = this, isSuccess = nil;

      if ((($a = ($rb_ge(n1, ($rb_plus($rb_divide(dice_cnt, 2), 0.9)).$to_i()))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ ファンブル"};
      isSuccess = false;
      if ((($a = (self.isCombatTest)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        isSuccess = ($rb_gt(total_n, diff))
        } else {
        isSuccess = ($rb_ge(total_n, diff))
      };
      if ((($a = (isSuccess)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        return " ＞ 失敗"
      };
      if ((($a = ($rb_ge(total_n, $rb_plus(diff, 10)))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return " ＞ クリティカル"};
      return " ＞ 成功";
    }, TMP_6.$$arity = 8);

    Opal.defn(self, '$check_nD10_combatTest', TMP_7 = function $$check_nD10_combatTest(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max) {
      var self = this, result = nil, $case = nil;

      result = self.$check_nD10_nomalTest(total_n, dice_n, signOfInequality, diff, dice_cnt, dice_max, n1, n_max);
      $case = result;if (" ＞ クリティカル"['$===']($case) || " ＞ 成功"['$===']($case)) {result = $rb_plus(result, self.$getDamageDice(total_n, diff))};
      return result;
    }, TMP_7.$$arity = 8);

    Opal.defn(self, '$getDamageDice', TMP_8 = function $$getDamageDice(total_n, diff) {
      var self = this, damageDiceCount = nil, damageDice = nil;

      self.$debug("getDamageDice total_n, diff", total_n, diff);
      damageDiceCount = ($rb_divide(($rb_minus(total_n, diff)), 5.0)).$ceil();
      self.$debug("damageDiceCount", damageDiceCount);
      damageDice = "(" + (damageDiceCount) + "d10)";
      return damageDice;
    }, TMP_8.$$arity = 2);

    Opal.defn(self, '$changeDiceValueByDiceText', TMP_9 = function $$changeDiceValueByDiceText(dice_now, dice_str, isCheckSuccess, dice_max) {
      var $a, $b, self = this;

      self.$debug("changeDiceValueByDiceText dice_now, dice_str, isCheckSuccess, dice_max", dice_now, dice_str, isCheckSuccess, dice_max);
      if ((($a = ((($b = isCheckSuccess !== false && isCheckSuccess !== nil && isCheckSuccess != null) ? dice_max['$=='](10) : isCheckSuccess))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.$debug("cthulhutech_check(dice_str) called");
        self.$debug("dice_str, dice_now", dice_str, dice_now);
        dice_now = self.$cthulhutech_check(dice_str);};
      self.$debug("dice_str, dice_now", dice_str, dice_now);
      return dice_now;
    }, TMP_9.$$arity = 4);

    return (Opal.defn(self, '$cthulhutech_check', TMP_15 = function $$cthulhutech_check(dice_str) {
      var $a, $b, TMP_10, $c, TMP_11, $d, TMP_12, $e, TMP_13, self = this, dice_aRR = nil, dice_num = nil, max_num = nil;

      dice_aRR = ($a = ($b = dice_str.$split(/,/)).$collect, $a.$$p = (TMP_10 = function(i){var self = TMP_10.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_10.$$s = self, TMP_10.$$arity = 1, TMP_10), $a).call($b);
      dice_num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      max_num = 0;
      ($a = ($c = dice_aRR).$each, $a.$$p = (TMP_11 = function(dice_n){var self = TMP_11.$$s || this, $d, $e;
if (dice_n == null) dice_n = nil;
      ($d = ($rb_minus(dice_n, 1)), $e = dice_num, $e['$[]=']($d, $rb_plus($e['$[]']($d), 1)));
        if ((($d = ($rb_gt(dice_n, max_num))) !== nil && $d != null && (!$d.$$is_boolean || $d == true))) {
          return max_num = dice_n
          } else {
          return nil
        };}, TMP_11.$$s = self, TMP_11.$$arity = 1, TMP_11), $a).call($c);
      if ((($a = ($rb_ge(dice_aRR.$length(), 2))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        ($a = ($d = (10)).$times, $a.$$p = (TMP_12 = function(i){var self = TMP_12.$$s || this, $e, dice_now = nil;
if (i == null) i = nil;
        if ((($e = ($rb_gt(dice_num['$[]'](i), 1))) !== nil && $e != null && (!$e.$$is_boolean || $e == true))) {
            dice_now = $rb_times(dice_num['$[]'](i), ($rb_plus(i, 1)));
            if ((($e = ($rb_gt(dice_now, max_num))) !== nil && $e != null && (!$e.$$is_boolean || $e == true))) {
              return max_num = dice_now
              } else {
              return nil
            };
            } else {
            return nil
          }}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12), $a).call($d);
        if ((($a = ($rb_ge(dice_aRR.$length(), 3))) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          ($a = ($e = (10)).$times, $a.$$p = (TMP_13 = function(i){var self = TMP_13.$$s || this, $f, $g, TMP_14, dice_now = nil;
if (i == null) i = nil;
          if ((($f = (dice_num['$[]']($rb_plus(i, 2))['$=='](nil))) !== nil && $f != null && (!$f.$$is_boolean || $f == true))) {
              
              Opal.brk(nil, $brk)};
            if ((($f = ($rb_gt(dice_num['$[]'](i), 0))) !== nil && $f != null && (!$f.$$is_boolean || $f == true))) {
              if ((($f = (($g = ($rb_gt(dice_num['$[]']($rb_plus(i, 1)), 0)), $g !== false && $g !== nil && $g != null ?($rb_gt(dice_num['$[]']($rb_plus(i, 2)), 0)) : $g))) !== nil && $f != null && (!$f.$$is_boolean || $f == true))) {
                dice_now = $rb_plus($rb_times(i, 3), 6);
                (function(){var $brk = Opal.new_brk(); try {return ($f = ($g = ($range(($rb_plus(i, 3)), 10, true))).$step, $f.$$p = (TMP_14 = function(i2){var self = TMP_14.$$s || this, $h;
if (i2 == null) i2 = nil;
                if ((($h = (dice_num['$[]'](i2)['$=='](0))) !== nil && $h != null && (!$h.$$is_boolean || $h == true))) {
                    
                    Opal.brk(nil, $brk)};
                  return dice_now = $rb_plus(dice_now, $rb_plus(i2, 1));}, TMP_14.$$s = self, TMP_14.$$brk = $brk, TMP_14.$$arity = 1, TMP_14), $f).call($g)
                } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
                if ((($f = ($rb_gt(dice_now, max_num))) !== nil && $f != null && (!$f.$$is_boolean || $f == true))) {
                  return max_num = dice_now
                  } else {
                  return nil
                };
                } else {
                return nil
              }
              } else {
              return nil
            };}, TMP_13.$$s = self, TMP_13.$$arity = 1, TMP_13), $a).call($e)};};
      return max_num;
    }, TMP_15.$$arity = 1), nil) && 'cthulhutech_check';
  })($scope.base, $scope.get('DiceBot'))
})(Opal);

/* Generated by Opal 0.10.5 */
(function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return $scope.get('Kernel').$exit()
})(Opal);
