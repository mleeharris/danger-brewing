import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import page from 'danger-brewing/tests/pages/add-tap';

moduleForComponent('hub-status', 'Integration | Component | add tap', {
  integration: true,
  beforeEach: function() {
    page.setContext(this);
  },
  afterEach: function() {
    page.removeContext();
  }
});

test('it renders', function(assert) {
  page.render(hbs`{{add-tap}}`);
  assert.ok(page.form.isVisible, 'see form');
  assert.ok(page.form.name.input.isVisible, 'can add tap name');
  assert.ok(page.form.nitro.isVisible, 'tap could be nitro');
  assert.ok(page.form.actions.cancel.isVisible, 'can cancel adding tap');
  assert.ok(page.form.actions.add.isVisible, 'can save tap');
});

// TODO
test('validation', function(assert) {
  page.render(hbs`{{add-tap}}`);
  assert.ok(true);
});
