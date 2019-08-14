(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0c1ed0"],
  {
    "47b9": function(e, n, t) {
      "use strict";
      t.r(n);
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        d,
        f,
        l,
        g,
        h,
        p,
        m,
        v,
        b,
        k,
        w,
        C,
        y = 12e4,
        _ = (function() {
          function e(e) {
            var n = this;
            (this._defaults = e),
              (this._worker = null),
              (this._idleCheckInterval = setInterval(function() {
                return n._checkIfIdle();
              }, 3e4)),
              (this._lastUsedTime = 0),
              (this._configChangeListener = this._defaults.onDidChange(
                function() {
                  return n._stopWorker();
                }
              ));
          }
          return (
            (e.prototype._stopWorker = function() {
              this._worker && (this._worker.dispose(), (this._worker = null)),
                (this._client = null);
            }),
            (e.prototype.dispose = function() {
              clearInterval(this._idleCheckInterval),
                this._configChangeListener.dispose(),
                this._stopWorker();
            }),
            (e.prototype._checkIfIdle = function() {
              if (this._worker) {
                var e = Date.now() - this._lastUsedTime;
                e > y && this._stopWorker();
              }
            }),
            (e.prototype._getClient = function() {
              return (
                (this._lastUsedTime = Date.now()),
                this._client ||
                  ((this._worker = monaco.editor.createWebWorker({
                    moduleId: "vs/language/json/jsonWorker",
                    label: this._defaults.languageId,
                    createData: {
                      languageSettings: this._defaults.diagnosticsOptions,
                      languageId: this._defaults.languageId,
                      enableSchemaRequest: this._defaults.diagnosticsOptions
                        .enableSchemaRequest
                    }
                  })),
                  (this._client = this._worker.getProxy())),
                this._client
              );
            }),
            (e.prototype.getLanguageServiceWorker = function() {
              for (var e, n = this, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return this._getClient()
                .then(function(n) {
                  e = n;
                })
                .then(function(e) {
                  return n._worker.withSyncedResources(t);
                })
                .then(function(n) {
                  return e;
                });
            }),
            e
          );
        })();
      (function(e) {
        function n(e, n) {
          return { line: e, character: n };
        }
        function t(e) {
          var n = e;
          return (
            X.objectLiteral(n) && X.number(n.line) && X.number(n.character)
          );
        }
        (e.create = n), (e.is = t);
      })(r || (r = {})),
        (function(e) {
          function n(e, n, t, i) {
            if (X.number(e) && X.number(n) && X.number(t) && X.number(i))
              return { start: r.create(e, n), end: r.create(t, i) };
            if (r.is(e) && r.is(n)) return { start: e, end: n };
            throw new Error(
              "Range#create called with invalid arguments[" +
                e +
                ", " +
                n +
                ", " +
                t +
                ", " +
                i +
                "]"
            );
          }
          function t(e) {
            var n = e;
            return X.objectLiteral(n) && r.is(n.start) && r.is(n.end);
          }
          (e.create = n), (e.is = t);
        })(i || (i = {})),
        (function(e) {
          function n(e, n) {
            return { uri: e, range: n };
          }
          function t(e) {
            var n = e;
            return (
              X.defined(n) &&
              i.is(n.range) &&
              (X.string(n.uri) || X.undefined(n.uri))
            );
          }
          (e.create = n), (e.is = t);
        })(o || (o = {})),
        (function(e) {
          function n(e, n, t, r) {
            return {
              targetUri: e,
              targetRange: n,
              targetSelectionRange: t,
              originSelectionRange: r
            };
          }
          function t(e) {
            var n = e;
            return (
              X.defined(n) &&
              i.is(n.targetRange) &&
              X.string(n.targetUri) &&
              (i.is(n.targetSelectionRange) ||
                X.undefined(n.targetSelectionRange)) &&
              (i.is(n.originSelectionRange) ||
                X.undefined(n.originSelectionRange))
            );
          }
          (e.create = n), (e.is = t);
        })(a || (a = {})),
        (function(e) {
          function n(e, n, t, r) {
            return { red: e, green: n, blue: t, alpha: r };
          }
          function t(e) {
            var n = e;
            return (
              X.number(n.red) &&
              X.number(n.green) &&
              X.number(n.blue) &&
              X.number(n.alpha)
            );
          }
          (e.create = n), (e.is = t);
        })(s || (s = {})),
        (function(e) {
          function n(e, n) {
            return { range: e, color: n };
          }
          function t(e) {
            var n = e;
            return i.is(n.range) && s.is(n.color);
          }
          (e.create = n), (e.is = t);
        })(u || (u = {})),
        (function(e) {
          function n(e, n, t) {
            return { label: e, textEdit: n, additionalTextEdits: t };
          }
          function t(e) {
            var n = e;
            return (
              X.string(n.label) &&
              (X.undefined(n.textEdit) || m.is(n)) &&
              (X.undefined(n.additionalTextEdits) ||
                X.typedArray(n.additionalTextEdits, m.is))
            );
          }
          (e.create = n), (e.is = t);
        })(c || (c = {})),
        (function(e) {
          (e["Comment"] = "comment"),
            (e["Imports"] = "imports"),
            (e["Region"] = "region");
        })(d || (d = {})),
        (function(e) {
          function n(e, n, t, r, i) {
            var o = { startLine: e, endLine: n };
            return (
              X.defined(t) && (o.startCharacter = t),
              X.defined(r) && (o.endCharacter = r),
              X.defined(i) && (o.kind = i),
              o
            );
          }
          function t(e) {
            var n = e;
            return (
              X.number(n.startLine) &&
              X.number(n.startLine) &&
              (X.undefined(n.startCharacter) || X.number(n.startCharacter)) &&
              (X.undefined(n.endCharacter) || X.number(n.endCharacter)) &&
              (X.undefined(n.kind) || X.string(n.kind))
            );
          }
          (e.create = n), (e.is = t);
        })(f || (f = {})),
        (function(e) {
          function n(e, n) {
            return { location: e, message: n };
          }
          function t(e) {
            var n = e;
            return X.defined(n) && o.is(n.location) && X.string(n.message);
          }
          (e.create = n), (e.is = t);
        })(l || (l = {})),
        (function(e) {
          (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
        })(g || (g = {})),
        (function(e) {
          function n(e, n, t, r, i, o) {
            var a = { range: e, message: n };
            return (
              X.defined(t) && (a.severity = t),
              X.defined(r) && (a.code = r),
              X.defined(i) && (a.source = i),
              X.defined(o) && (a.relatedInformation = o),
              a
            );
          }
          function t(e) {
            var n = e;
            return (
              X.defined(n) &&
              i.is(n.range) &&
              X.string(n.message) &&
              (X.number(n.severity) || X.undefined(n.severity)) &&
              (X.number(n.code) || X.string(n.code) || X.undefined(n.code)) &&
              (X.string(n.source) || X.undefined(n.source)) &&
              (X.undefined(n.relatedInformation) ||
                X.typedArray(n.relatedInformation, l.is))
            );
          }
          (e.create = n), (e.is = t);
        })(h || (h = {})),
        (function(e) {
          function n(e, n) {
            for (var t = [], r = 2; r < arguments.length; r++)
              t[r - 2] = arguments[r];
            var i = { title: e, command: n };
            return X.defined(t) && t.length > 0 && (i.arguments = t), i;
          }
          function t(e) {
            var n = e;
            return X.defined(n) && X.string(n.title) && X.string(n.command);
          }
          (e.create = n), (e.is = t);
        })(p || (p = {})),
        (function(e) {
          function n(e, n) {
            return { range: e, newText: n };
          }
          function t(e, n) {
            return { range: { start: e, end: e }, newText: n };
          }
          function r(e) {
            return { range: e, newText: "" };
          }
          function o(e) {
            var n = e;
            return X.objectLiteral(n) && X.string(n.newText) && i.is(n.range);
          }
          (e.replace = n), (e.insert = t), (e.del = r), (e.is = o);
        })(m || (m = {})),
        (function(e) {
          function n(e, n) {
            return { textDocument: e, edits: n };
          }
          function t(e) {
            var n = e;
            return (
              X.defined(n) && x.is(n.textDocument) && Array.isArray(n.edits)
            );
          }
          (e.create = n), (e.is = t);
        })(v || (v = {})),
        (function(e) {
          function n(e, n) {
            var t = { kind: "create", uri: e };
            return (
              void 0 === n ||
                (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
                (t.options = n),
              t
            );
          }
          function t(e) {
            var n = e;
            return (
              n &&
              "create" === n.kind &&
              X.string(n.uri) &&
              (void 0 === n.options ||
                ((void 0 === n.options.overwrite ||
                  X.boolean(n.options.overwrite)) &&
                  (void 0 === n.options.ignoreIfExists ||
                    X.boolean(n.options.ignoreIfExists))))
            );
          }
          (e.create = n), (e.is = t);
        })(b || (b = {})),
        (function(e) {
          function n(e, n, t) {
            var r = { kind: "rename", oldUri: e, newUri: n };
            return (
              void 0 === t ||
                (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
                (r.options = t),
              r
            );
          }
          function t(e) {
            var n = e;
            return (
              n &&
              "rename" === n.kind &&
              X.string(n.oldUri) &&
              X.string(n.newUri) &&
              (void 0 === n.options ||
                ((void 0 === n.options.overwrite ||
                  X.boolean(n.options.overwrite)) &&
                  (void 0 === n.options.ignoreIfExists ||
                    X.boolean(n.options.ignoreIfExists))))
            );
          }
          (e.create = n), (e.is = t);
        })(k || (k = {})),
        (function(e) {
          function n(e, n) {
            var t = { kind: "delete", uri: e };
            return (
              void 0 === n ||
                (void 0 === n.recursive && void 0 === n.ignoreIfNotExists) ||
                (t.options = n),
              t
            );
          }
          function t(e) {
            var n = e;
            return (
              n &&
              "delete" === n.kind &&
              X.string(n.uri) &&
              (void 0 === n.options ||
                ((void 0 === n.options.recursive ||
                  X.boolean(n.options.recursive)) &&
                  (void 0 === n.options.ignoreIfNotExists ||
                    X.boolean(n.options.ignoreIfNotExists))))
            );
          }
          (e.create = n), (e.is = t);
        })(w || (w = {})),
        (function(e) {
          function n(e) {
            var n = e;
            return (
              n &&
              (void 0 !== n.changes || void 0 !== n.documentChanges) &&
              (void 0 === n.documentChanges ||
                n.documentChanges.every(function(e) {
                  return X.string(e.kind)
                    ? b.is(e) || k.is(e) || w.is(e)
                    : v.is(e);
                }))
            );
          }
          e.is = n;
        })(C || (C = {}));
      var E,
        x,
        S,
        I,
        A,
        T,
        M,
        P,
        R,
        j,
        F,
        D,
        L,
        O,
        W,
        N,
        U,
        V = (function() {
          function e(e) {
            this.edits = e;
          }
          return (
            (e.prototype.insert = function(e, n) {
              this.edits.push(m.insert(e, n));
            }),
            (e.prototype.replace = function(e, n) {
              this.edits.push(m.replace(e, n));
            }),
            (e.prototype.delete = function(e) {
              this.edits.push(m.del(e));
            }),
            (e.prototype.add = function(e) {
              this.edits.push(e);
            }),
            (e.prototype.all = function() {
              return this.edits;
            }),
            (e.prototype.clear = function() {
              this.edits.splice(0, this.edits.length);
            }),
            e
          );
        })();
      (function() {
        function e(e) {
          var n = this;
          (this._textEditChanges = Object.create(null)),
            e &&
              ((this._workspaceEdit = e),
              e.documentChanges
                ? e.documentChanges.forEach(function(e) {
                    if (v.is(e)) {
                      var t = new V(e.edits);
                      n._textEditChanges[e.textDocument.uri] = t;
                    }
                  })
                : e.changes &&
                  Object.keys(e.changes).forEach(function(t) {
                    var r = new V(e.changes[t]);
                    n._textEditChanges[t] = r;
                  }));
        }
        Object.defineProperty(e.prototype, "edit", {
          get: function() {
            return this._workspaceEdit;
          },
          enumerable: !0,
          configurable: !0
        }),
          (e.prototype.getTextEditChange = function(e) {
            if (x.is(e)) {
              if (
                (this._workspaceEdit ||
                  (this._workspaceEdit = { documentChanges: [] }),
                !this._workspaceEdit.documentChanges)
              )
                throw new Error(
                  "Workspace edit is not configured for document changes."
                );
              var n = e,
                t = this._textEditChanges[n.uri];
              if (!t) {
                var r = [],
                  i = { textDocument: n, edits: r };
                this._workspaceEdit.documentChanges.push(i),
                  (t = new V(r)),
                  (this._textEditChanges[n.uri] = t);
              }
              return t;
            }
            if (
              (this._workspaceEdit ||
                (this._workspaceEdit = { changes: Object.create(null) }),
              !this._workspaceEdit.changes)
            )
              throw new Error(
                "Workspace edit is not configured for normal text edit changes."
              );
            t = this._textEditChanges[e];
            if (!t) {
              r = [];
              (this._workspaceEdit.changes[e] = r),
                (t = new V(r)),
                (this._textEditChanges[e] = t);
            }
            return t;
          }),
          (e.prototype.createFile = function(e, n) {
            this.checkDocumentChanges(),
              this._workspaceEdit.documentChanges.push(b.create(e, n));
          }),
          (e.prototype.renameFile = function(e, n, t) {
            this.checkDocumentChanges(),
              this._workspaceEdit.documentChanges.push(k.create(e, n, t));
          }),
          (e.prototype.deleteFile = function(e, n) {
            this.checkDocumentChanges(),
              this._workspaceEdit.documentChanges.push(w.create(e, n));
          }),
          (e.prototype.checkDocumentChanges = function() {
            if (!this._workspaceEdit || !this._workspaceEdit.documentChanges)
              throw new Error(
                "Workspace edit is not configured for document changes."
              );
          });
      })();
      (function(e) {
        function n(e) {
          return { uri: e };
        }
        function t(e) {
          var n = e;
          return X.defined(n) && X.string(n.uri);
        }
        (e.create = n), (e.is = t);
      })(E || (E = {})),
        (function(e) {
          function n(e, n) {
            return { uri: e, version: n };
          }
          function t(e) {
            var n = e;
            return (
              X.defined(n) &&
              X.string(n.uri) &&
              (null === n.version || X.number(n.version))
            );
          }
          (e.create = n), (e.is = t);
        })(x || (x = {})),
        (function(e) {
          function n(e, n, t, r) {
            return { uri: e, languageId: n, version: t, text: r };
          }
          function t(e) {
            var n = e;
            return (
              X.defined(n) &&
              X.string(n.uri) &&
              X.string(n.languageId) &&
              X.number(n.version) &&
              X.string(n.text)
            );
          }
          (e.create = n), (e.is = t);
        })(S || (S = {})),
        (function(e) {
          (e.PlainText = "plaintext"), (e.Markdown = "markdown");
        })(I || (I = {})),
        (function(e) {
          function n(n) {
            var t = n;
            return t === e.PlainText || t === e.Markdown;
          }
          e.is = n;
        })(I || (I = {})),
        (function(e) {
          function n(e) {
            var n = e;
            return X.objectLiteral(e) && I.is(n.kind) && X.string(n.value);
          }
          e.is = n;
        })(A || (A = {})),
        (function(e) {
          (e.Text = 1),
            (e.Method = 2),
            (e.Function = 3),
            (e.Constructor = 4),
            (e.Field = 5),
            (e.Variable = 6),
            (e.Class = 7),
            (e.Interface = 8),
            (e.Module = 9),
            (e.Property = 10),
            (e.Unit = 11),
            (e.Value = 12),
            (e.Enum = 13),
            (e.Keyword = 14),
            (e.Snippet = 15),
            (e.Color = 16),
            (e.File = 17),
            (e.Reference = 18),
            (e.Folder = 19),
            (e.EnumMember = 20),
            (e.Constant = 21),
            (e.Struct = 22),
            (e.Event = 23),
            (e.Operator = 24),
            (e.TypeParameter = 25);
        })(T || (T = {})),
        (function(e) {
          (e.PlainText = 1), (e.Snippet = 2);
        })(M || (M = {})),
        (function(e) {
          function n(e) {
            return { label: e };
          }
          e.create = n;
        })(P || (P = {})),
        (function(e) {
          function n(e, n) {
            return { items: e || [], isIncomplete: !!n };
          }
          e.create = n;
        })(R || (R = {})),
        (function(e) {
          function n(e) {
            return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
          }
          function t(e) {
            var n = e;
            return (
              X.string(n) ||
              (X.objectLiteral(n) && X.string(n.language) && X.string(n.value))
            );
          }
          (e.fromPlainText = n), (e.is = t);
        })(j || (j = {})),
        (function(e) {
          function n(e) {
            var n = e;
            return (
              !!n &&
              X.objectLiteral(n) &&
              (A.is(n.contents) ||
                j.is(n.contents) ||
                X.typedArray(n.contents, j.is)) &&
              (void 0 === e.range || i.is(e.range))
            );
          }
          e.is = n;
        })(F || (F = {})),
        (function(e) {
          function n(e, n) {
            return n ? { label: e, documentation: n } : { label: e };
          }
          e.create = n;
        })(D || (D = {})),
        (function(e) {
          function n(e, n) {
            for (var t = [], r = 2; r < arguments.length; r++)
              t[r - 2] = arguments[r];
            var i = { label: e };
            return (
              X.defined(n) && (i.documentation = n),
              X.defined(t) ? (i.parameters = t) : (i.parameters = []),
              i
            );
          }
          e.create = n;
        })(L || (L = {})),
        (function(e) {
          (e.Text = 1), (e.Read = 2), (e.Write = 3);
        })(O || (O = {})),
        (function(e) {
          function n(e, n) {
            var t = { range: e };
            return X.number(n) && (t.kind = n), t;
          }
          e.create = n;
        })(W || (W = {})),
        (function(e) {
          (e.File = 1),
            (e.Module = 2),
            (e.Namespace = 3),
            (e.Package = 4),
            (e.Class = 5),
            (e.Method = 6),
            (e.Property = 7),
            (e.Field = 8),
            (e.Constructor = 9),
            (e.Enum = 10),
            (e.Interface = 11),
            (e.Function = 12),
            (e.Variable = 13),
            (e.Constant = 14),
            (e.String = 15),
            (e.Number = 16),
            (e.Boolean = 17),
            (e.Array = 18),
            (e.Object = 19),
            (e.Key = 20),
            (e.Null = 21),
            (e.EnumMember = 22),
            (e.Struct = 23),
            (e.Event = 24),
            (e.Operator = 25),
            (e.TypeParameter = 26);
        })(N || (N = {})),
        (function(e) {
          function n(e, n, t, r, i) {
            var o = { name: e, kind: n, location: { uri: r, range: t } };
            return i && (o.containerName = i), o;
          }
          e.create = n;
        })(U || (U = {}));
      var K,
        z,
        H,
        q,
        B,
        J = (function() {
          function e() {}
          return e;
        })();
      (function(e) {
        function n(e, n, t, r, i, o) {
          var a = { name: e, detail: n, kind: t, range: r, selectionRange: i };
          return void 0 !== o && (a.children = o), a;
        }
        function t(e) {
          var n = e;
          return (
            n &&
            X.string(n.name) &&
            X.number(n.kind) &&
            i.is(n.range) &&
            i.is(n.selectionRange) &&
            (void 0 === n.detail || X.string(n.detail)) &&
            (void 0 === n.deprecated || X.boolean(n.deprecated)) &&
            (void 0 === n.children || Array.isArray(n.children))
          );
        }
        (e.create = n), (e.is = t);
      })(J || (J = {})),
        (function(e) {
          (e.QuickFix = "quickfix"),
            (e.Refactor = "refactor"),
            (e.RefactorExtract = "refactor.extract"),
            (e.RefactorInline = "refactor.inline"),
            (e.RefactorRewrite = "refactor.rewrite"),
            (e.Source = "source"),
            (e.SourceOrganizeImports = "source.organizeImports");
        })(K || (K = {})),
        (function(e) {
          function n(e, n) {
            var t = { diagnostics: e };
            return void 0 !== n && null !== n && (t.only = n), t;
          }
          function t(e) {
            var n = e;
            return (
              X.defined(n) &&
              X.typedArray(n.diagnostics, h.is) &&
              (void 0 === n.only || X.typedArray(n.only, X.string))
            );
          }
          (e.create = n), (e.is = t);
        })(z || (z = {})),
        (function(e) {
          function n(e, n, t) {
            var r = { title: e };
            return (
              p.is(n) ? (r.command = n) : (r.edit = n),
              void 0 !== t && (r.kind = t),
              r
            );
          }
          function t(e) {
            var n = e;
            return (
              n &&
              X.string(n.title) &&
              (void 0 === n.diagnostics || X.typedArray(n.diagnostics, h.is)) &&
              (void 0 === n.kind || X.string(n.kind)) &&
              (void 0 !== n.edit || void 0 !== n.command) &&
              (void 0 === n.command || p.is(n.command)) &&
              (void 0 === n.edit || C.is(n.edit))
            );
          }
          (e.create = n), (e.is = t);
        })(H || (H = {})),
        (function(e) {
          function n(e, n) {
            var t = { range: e };
            return X.defined(n) && (t.data = n), t;
          }
          function t(e) {
            var n = e;
            return (
              X.defined(n) &&
              i.is(n.range) &&
              (X.undefined(n.command) || p.is(n.command))
            );
          }
          (e.create = n), (e.is = t);
        })(q || (q = {})),
        (function(e) {
          function n(e, n) {
            return { tabSize: e, insertSpaces: n };
          }
          function t(e) {
            var n = e;
            return (
              X.defined(n) && X.number(n.tabSize) && X.boolean(n.insertSpaces)
            );
          }
          (e.create = n), (e.is = t);
        })(B || (B = {}));
      var $ = (function() {
        function e() {}
        return e;
      })();
      (function(e) {
        function n(e, n, t) {
          return { range: e, target: n, data: t };
        }
        function t(e) {
          var n = e;
          return (
            X.defined(n) &&
            i.is(n.range) &&
            (X.undefined(n.target) || X.string(n.target))
          );
        }
        (e.create = n), (e.is = t);
      })($ || ($ = {}));
      var Q, G;
      (function(e) {
        function n(e, n, t, r) {
          return new Y(e, n, t, r);
        }
        function t(e) {
          var n = e;
          return !!(
            X.defined(n) &&
            X.string(n.uri) &&
            (X.undefined(n.languageId) || X.string(n.languageId)) &&
            X.number(n.lineCount) &&
            X.func(n.getText) &&
            X.func(n.positionAt) &&
            X.func(n.offsetAt)
          );
        }
        function r(e, n) {
          for (
            var t = e.getText(),
              r = i(n, function(e, n) {
                var t = e.range.start.line - n.range.start.line;
                return 0 === t
                  ? e.range.start.character - n.range.start.character
                  : t;
              }),
              o = t.length,
              a = r.length - 1;
            a >= 0;
            a--
          ) {
            var s = r[a],
              u = e.offsetAt(s.range.start),
              c = e.offsetAt(s.range.end);
            if (!(c <= o)) throw new Error("Overlapping edit");
            (t = t.substring(0, u) + s.newText + t.substring(c, t.length)),
              (o = u);
          }
          return t;
        }
        function i(e, n) {
          if (e.length <= 1) return e;
          var t = (e.length / 2) | 0,
            r = e.slice(0, t),
            o = e.slice(t);
          i(r, n), i(o, n);
          var a = 0,
            s = 0,
            u = 0;
          while (a < r.length && s < o.length) {
            var c = n(r[a], o[s]);
            e[u++] = c <= 0 ? r[a++] : o[s++];
          }
          while (a < r.length) e[u++] = r[a++];
          while (s < o.length) e[u++] = o[s++];
          return e;
        }
        (e.create = n), (e.is = t), (e.applyEdits = r);
      })(Q || (Q = {})),
        (function(e) {
          (e.Manual = 1), (e.AfterDelay = 2), (e.FocusOut = 3);
        })(G || (G = {}));
      var X,
        Y = (function() {
          function e(e, n, t, r) {
            (this._uri = e),
              (this._languageId = n),
              (this._version = t),
              (this._content = r),
              (this._lineOffsets = null);
          }
          return (
            Object.defineProperty(e.prototype, "uri", {
              get: function() {
                return this._uri;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "languageId", {
              get: function() {
                return this._languageId;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "version", {
              get: function() {
                return this._version;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.getText = function(e) {
              if (e) {
                var n = this.offsetAt(e.start),
                  t = this.offsetAt(e.end);
                return this._content.substring(n, t);
              }
              return this._content;
            }),
            (e.prototype.update = function(e, n) {
              (this._content = e.text),
                (this._version = n),
                (this._lineOffsets = null);
            }),
            (e.prototype.getLineOffsets = function() {
              if (null === this._lineOffsets) {
                for (
                  var e = [], n = this._content, t = !0, r = 0;
                  r < n.length;
                  r++
                ) {
                  t && (e.push(r), (t = !1));
                  var i = n.charAt(r);
                  (t = "\r" === i || "\n" === i),
                    "\r" === i &&
                      r + 1 < n.length &&
                      "\n" === n.charAt(r + 1) &&
                      r++;
                }
                t && n.length > 0 && e.push(n.length), (this._lineOffsets = e);
              }
              return this._lineOffsets;
            }),
            (e.prototype.positionAt = function(e) {
              e = Math.max(Math.min(e, this._content.length), 0);
              var n = this.getLineOffsets(),
                t = 0,
                i = n.length;
              if (0 === i) return r.create(0, e);
              while (t < i) {
                var o = Math.floor((t + i) / 2);
                n[o] > e ? (i = o) : (t = o + 1);
              }
              var a = t - 1;
              return r.create(a, e - n[a]);
            }),
            (e.prototype.offsetAt = function(e) {
              var n = this.getLineOffsets();
              if (e.line >= n.length) return this._content.length;
              if (e.line < 0) return 0;
              var t = n[e.line],
                r =
                  e.line + 1 < n.length ? n[e.line + 1] : this._content.length;
              return Math.max(Math.min(t + e.character, r), t);
            }),
            Object.defineProperty(e.prototype, "lineCount", {
              get: function() {
                return this.getLineOffsets().length;
              },
              enumerable: !0,
              configurable: !0
            }),
            e
          );
        })();
      (function(e) {
        var n = Object.prototype.toString;
        function t(e) {
          return "undefined" !== typeof e;
        }
        function r(e) {
          return "undefined" === typeof e;
        }
        function i(e) {
          return !0 === e || !1 === e;
        }
        function o(e) {
          return "[object String]" === n.call(e);
        }
        function a(e) {
          return "[object Number]" === n.call(e);
        }
        function s(e) {
          return "[object Function]" === n.call(e);
        }
        function u(e) {
          return null !== e && "object" === typeof e;
        }
        function c(e, n) {
          return Array.isArray(e) && e.every(n);
        }
        (e.defined = t),
          (e.undefined = r),
          (e.boolean = i),
          (e.string = o),
          (e.number = a),
          (e.func = s),
          (e.objectLiteral = u),
          (e.typedArray = c);
      })(X || (X = {}));
      monaco.Uri;
      var Z = monaco.Range,
        ee = (function() {
          function e(e, n, t) {
            var r = this;
            (this._languageId = e),
              (this._worker = n),
              (this._disposables = []),
              (this._listener = Object.create(null));
            var i = function(e) {
                var n,
                  t = e.getModeId();
                t === r._languageId &&
                  ((r._listener[e.uri.toString()] = e.onDidChangeContent(
                    function() {
                      clearTimeout(n),
                        (n = setTimeout(function() {
                          return r._doValidate(e.uri, t);
                        }, 500));
                    }
                  )),
                  r._doValidate(e.uri, t));
              },
              o = function(e) {
                monaco.editor.setModelMarkers(e, r._languageId, []);
                var n = e.uri.toString(),
                  t = r._listener[n];
                t && (t.dispose(), delete r._listener[n]);
              };
            this._disposables.push(monaco.editor.onDidCreateModel(i)),
              this._disposables.push(
                monaco.editor.onWillDisposeModel(function(e) {
                  o(e), r._resetSchema(e.uri);
                })
              ),
              this._disposables.push(
                monaco.editor.onDidChangeModelLanguage(function(e) {
                  o(e.model), i(e.model), r._resetSchema(e.model.uri);
                })
              ),
              this._disposables.push(
                t.onDidChange(function(e) {
                  monaco.editor.getModels().forEach(function(e) {
                    e.getModeId() === r._languageId && (o(e), i(e));
                  });
                })
              ),
              this._disposables.push({
                dispose: function() {
                  for (var e in (monaco.editor.getModels().forEach(o),
                  r._listener))
                    r._listener[e].dispose();
                }
              }),
              monaco.editor.getModels().forEach(i);
          }
          return (
            (e.prototype.dispose = function() {
              this._disposables.forEach(function(e) {
                return e && e.dispose();
              }),
                (this._disposables = []);
            }),
            (e.prototype._resetSchema = function(e) {
              this._worker().then(function(n) {
                n.resetSchema(e.toString());
              });
            }),
            (e.prototype._doValidate = function(e, n) {
              this._worker(e)
                .then(function(t) {
                  return t.doValidation(e.toString()).then(function(t) {
                    var r = t.map(function(n) {
                        return te(e, n);
                      }),
                      i = monaco.editor.getModel(e);
                    i &&
                      i.getModeId() === n &&
                      monaco.editor.setModelMarkers(i, n, r);
                  });
                })
                .then(void 0, function(e) {
                  console.error(e);
                });
            }),
            e
          );
        })();
      function ne(e) {
        switch (e) {
          case g.Error:
            return monaco.MarkerSeverity.Error;
          case g.Warning:
            return monaco.MarkerSeverity.Warning;
          case g.Information:
            return monaco.MarkerSeverity.Info;
          case g.Hint:
            return monaco.MarkerSeverity.Hint;
          default:
            return monaco.MarkerSeverity.Info;
        }
      }
      function te(e, n) {
        var t = "number" === typeof n.code ? String(n.code) : n.code;
        return {
          severity: ne(n.severity),
          startLineNumber: n.range.start.line + 1,
          startColumn: n.range.start.character + 1,
          endLineNumber: n.range.end.line + 1,
          endColumn: n.range.end.character + 1,
          message: n.message,
          code: t,
          source: n.source
        };
      }
      function re(e) {
        if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
      }
      function ie(e) {
        if (e)
          return {
            start: {
              line: e.startLineNumber - 1,
              character: e.startColumn - 1
            },
            end: { line: e.endLineNumber - 1, character: e.endColumn - 1 }
          };
      }
      function oe(e) {
        if (e)
          return new Z(
            e.start.line + 1,
            e.start.character + 1,
            e.end.line + 1,
            e.end.character + 1
          );
      }
      function ae(e) {
        var n = monaco.languages.CompletionItemKind;
        switch (e) {
          case T.Text:
            return n.Text;
          case T.Method:
            return n.Method;
          case T.Function:
            return n.Function;
          case T.Constructor:
            return n.Constructor;
          case T.Field:
            return n.Field;
          case T.Variable:
            return n.Variable;
          case T.Class:
            return n.Class;
          case T.Interface:
            return n.Interface;
          case T.Module:
            return n.Module;
          case T.Property:
            return n.Property;
          case T.Unit:
            return n.Unit;
          case T.Value:
            return n.Value;
          case T.Enum:
            return n.Enum;
          case T.Keyword:
            return n.Keyword;
          case T.Snippet:
            return n.Snippet;
          case T.Color:
            return n.Color;
          case T.File:
            return n.File;
          case T.Reference:
            return n.Reference;
        }
        return n.Property;
      }
      function se(e) {
        if (e) return { range: oe(e.range), text: e.newText };
      }
      var ue = (function() {
        function e(e) {
          this._worker = e;
        }
        return (
          Object.defineProperty(e.prototype, "triggerCharacters", {
            get: function() {
              return [" ", ":"];
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.provideCompletionItems = function(e, n, t, r) {
            var i = e.uri;
            return this._worker(i)
              .then(function(e) {
                return e.doComplete(i.toString(), re(n));
              })
              .then(function(t) {
                if (t) {
                  var r = e.getWordUntilPosition(n),
                    i = new Z(
                      n.lineNumber,
                      r.startColumn,
                      n.lineNumber,
                      r.endColumn
                    ),
                    o = t.items.map(function(e) {
                      var n = {
                        label: e.label,
                        insertText: e.insertText || e.label,
                        sortText: e.sortText,
                        filterText: e.filterText,
                        documentation: e.documentation,
                        detail: e.detail,
                        range: i,
                        kind: ae(e.kind)
                      };
                      return (
                        e.textEdit &&
                          ((n.range = oe(e.textEdit.range)),
                          (n.insertText = e.textEdit.newText)),
                        e.additionalTextEdits &&
                          (n.additionalTextEdits = e.additionalTextEdits.map(
                            se
                          )),
                        e.insertTextFormat === M.Snippet &&
                          (n.insertTextRules =
                            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),
                        n
                      );
                    });
                  return { isIncomplete: t.isIncomplete, suggestions: o };
                }
              });
          }),
          e
        );
      })();
      function ce(e) {
        return e && "object" === typeof e && "string" === typeof e.kind;
      }
      function de(e) {
        return "string" === typeof e
          ? { value: e }
          : ce(e)
          ? "plaintext" === e.kind
            ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&") }
            : { value: e.value }
          : { value: "```" + e.language + "\n" + e.value + "\n```\n" };
      }
      function fe(e) {
        if (e) return Array.isArray(e) ? e.map(de) : [de(e)];
      }
      var le = (function() {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideHover = function(e, n, t) {
            var r = e.uri;
            return this._worker(r)
              .then(function(e) {
                return e.doHover(r.toString(), re(n));
              })
              .then(function(e) {
                if (e) return { range: oe(e.range), contents: fe(e.contents) };
              });
          }),
          e
        );
      })();
      function ge(e) {
        var n = monaco.languages.SymbolKind;
        switch (e) {
          case N.File:
            return n.Array;
          case N.Module:
            return n.Module;
          case N.Namespace:
            return n.Namespace;
          case N.Package:
            return n.Package;
          case N.Class:
            return n.Class;
          case N.Method:
            return n.Method;
          case N.Property:
            return n.Property;
          case N.Field:
            return n.Field;
          case N.Constructor:
            return n.Constructor;
          case N.Enum:
            return n.Enum;
          case N.Interface:
            return n.Interface;
          case N.Function:
            return n.Function;
          case N.Variable:
            return n.Variable;
          case N.Constant:
            return n.Constant;
          case N.String:
            return n.String;
          case N.Number:
            return n.Number;
          case N.Boolean:
            return n.Boolean;
          case N.Array:
            return n.Array;
        }
        return n.Function;
      }
      var he = (function() {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentSymbols = function(e, n) {
            var t = e.uri;
            return this._worker(t)
              .then(function(e) {
                return e.findDocumentSymbols(t.toString());
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    return {
                      name: e.name,
                      detail: "",
                      containerName: e.containerName,
                      kind: ge(e.kind),
                      range: oe(e.location.range),
                      selectionRange: oe(e.location.range)
                    };
                  });
              });
          }),
          e
        );
      })();
      function pe(e) {
        return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
      }
      var me,
        ve = (function() {
          function e(e) {
            this._worker = e;
          }
          return (
            (e.prototype.provideDocumentFormattingEdits = function(e, n, t) {
              var r = e.uri;
              return this._worker(r).then(function(e) {
                return e.format(r.toString(), null, pe(n)).then(function(e) {
                  if (e && 0 !== e.length) return e.map(se);
                });
              });
            }),
            e
          );
        })(),
        be = (function() {
          function e(e) {
            this._worker = e;
          }
          return (
            (e.prototype.provideDocumentRangeFormattingEdits = function(
              e,
              n,
              t,
              r
            ) {
              var i = e.uri;
              return this._worker(i).then(function(e) {
                return e.format(i.toString(), ie(n), pe(t)).then(function(e) {
                  if (e && 0 !== e.length) return e.map(se);
                });
              });
            }),
            e
          );
        })(),
        ke = (function() {
          function e(e) {
            this._worker = e;
          }
          return (
            (e.prototype.provideDocumentColors = function(e, n) {
              var t = e.uri;
              return this._worker(t)
                .then(function(e) {
                  return e.findDocumentColors(t.toString());
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      return { color: e.color, range: oe(e.range) };
                    });
                });
            }),
            (e.prototype.provideColorPresentations = function(e, n, t) {
              var r = e.uri;
              return this._worker(r)
                .then(function(e) {
                  return e.getColorPresentations(
                    r.toString(),
                    n.color,
                    ie(n.range)
                  );
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      var n = { label: e.label };
                      return (
                        e.textEdit && (n.textEdit = se(e.textEdit)),
                        e.additionalTextEdits &&
                          (n.additionalTextEdits = e.additionalTextEdits.map(
                            se
                          )),
                        n
                      );
                    });
                });
            }),
            e
          );
        })(),
        we = (function() {
          function e(e) {
            this._worker = e;
          }
          return (
            (e.prototype.provideFoldingRanges = function(e, n, t) {
              var r = e.uri;
              return this._worker(r)
                .then(function(e) {
                  return e.provideFoldingRanges(r.toString(), n);
                })
                .then(function(e) {
                  if (e)
                    return e.map(function(e) {
                      var n = { start: e.startLine + 1, end: e.endLine + 1 };
                      return (
                        "undefined" !== typeof e.kind && (n.kind = Ce(e.kind)),
                        n
                      );
                    });
                });
            }),
            e
          );
        })();
      function Ce(e) {
        switch (e) {
          case d.Comment:
            return monaco.languages.FoldingRangeKind.Comment;
          case d.Imports:
            return monaco.languages.FoldingRangeKind.Imports;
          case d.Region:
            return monaco.languages.FoldingRangeKind.Region;
        }
      }
      function ye(e, n) {
        void 0 === n && (n = !1);
        var t = 0,
          r = e.length,
          i = "",
          o = 0,
          a = 16,
          s = 0;
        function u(n, r) {
          var i = 0,
            o = 0;
          while (i < n || !r) {
            var a = e.charCodeAt(t);
            if (a >= 48 && a <= 57) o = 16 * o + a - 48;
            else if (a >= 65 && a <= 70) o = 16 * o + a - 65 + 10;
            else {
              if (!(a >= 97 && a <= 102)) break;
              o = 16 * o + a - 97 + 10;
            }
            t++, i++;
          }
          return i < n && (o = -1), o;
        }
        function c(e) {
          (t = e), (i = ""), (o = 0), (a = 16), (s = 0);
        }
        function d() {
          var n = t;
          if (48 === e.charCodeAt(t)) t++;
          else {
            t++;
            while (t < e.length && xe(e.charCodeAt(t))) t++;
          }
          if (t < e.length && 46 === e.charCodeAt(t)) {
            if ((t++, !(t < e.length && xe(e.charCodeAt(t)))))
              return (s = 3), e.substring(n, t);
            t++;
            while (t < e.length && xe(e.charCodeAt(t))) t++;
          }
          var r = t;
          if (
            t < e.length &&
            (69 === e.charCodeAt(t) || 101 === e.charCodeAt(t))
          )
            if (
              (t++,
              ((t < e.length && 43 === e.charCodeAt(t)) ||
                45 === e.charCodeAt(t)) &&
                t++,
              t < e.length && xe(e.charCodeAt(t)))
            ) {
              t++;
              while (t < e.length && xe(e.charCodeAt(t))) t++;
              r = t;
            } else s = 3;
          return e.substring(n, r);
        }
        function f() {
          var n = "",
            i = t;
          while (1) {
            if (t >= r) {
              (n += e.substring(i, t)), (s = 2);
              break;
            }
            var o = e.charCodeAt(t);
            if (34 === o) {
              (n += e.substring(i, t)), t++;
              break;
            }
            if (92 !== o) {
              if (o >= 0 && o <= 31) {
                if (Ee(o)) {
                  (n += e.substring(i, t)), (s = 2);
                  break;
                }
                s = 6;
              }
              t++;
            } else {
              if (((n += e.substring(i, t)), t++, t >= r)) {
                s = 2;
                break;
              }
              switch (((o = e.charCodeAt(t++)), o)) {
                case 34:
                  n += '"';
                  break;
                case 92:
                  n += "\\";
                  break;
                case 47:
                  n += "/";
                  break;
                case 98:
                  n += "\b";
                  break;
                case 102:
                  n += "\f";
                  break;
                case 110:
                  n += "\n";
                  break;
                case 114:
                  n += "\r";
                  break;
                case 116:
                  n += "\t";
                  break;
                case 117:
                  var a = u(4, !0);
                  a >= 0 ? (n += String.fromCharCode(a)) : (s = 4);
                  break;
                default:
                  s = 5;
              }
              i = t;
            }
          }
          return n;
        }
        function l() {
          if (((i = ""), (s = 0), (o = t), t >= r)) return (o = r), (a = 17);
          var n = e.charCodeAt(t);
          if (_e(n)) {
            do {
              t++, (i += String.fromCharCode(n)), (n = e.charCodeAt(t));
            } while (_e(n));
            return (a = 15);
          }
          if (Ee(n))
            return (
              t++,
              (i += String.fromCharCode(n)),
              13 === n && 10 === e.charCodeAt(t) && (t++, (i += "\n")),
              (a = 14)
            );
          switch (n) {
            case 123:
              return t++, (a = 1);
            case 125:
              return t++, (a = 2);
            case 91:
              return t++, (a = 3);
            case 93:
              return t++, (a = 4);
            case 58:
              return t++, (a = 6);
            case 44:
              return t++, (a = 5);
            case 34:
              return t++, (i = f()), (a = 10);
            case 47:
              var u = t - 1;
              if (47 === e.charCodeAt(t + 1)) {
                t += 2;
                while (t < r) {
                  if (Ee(e.charCodeAt(t))) break;
                  t++;
                }
                return (i = e.substring(u, t)), (a = 12);
              }
              if (42 === e.charCodeAt(t + 1)) {
                t += 2;
                var c = r - 1,
                  l = !1;
                while (t < c) {
                  var h = e.charCodeAt(t);
                  if (42 === h && 47 === e.charCodeAt(t + 1)) {
                    (t += 2), (l = !0);
                    break;
                  }
                  t++;
                }
                return l || (t++, (s = 1)), (i = e.substring(u, t)), (a = 13);
              }
              return (i += String.fromCharCode(n)), t++, (a = 16);
            case 45:
              if (
                ((i += String.fromCharCode(n)),
                t++,
                t === r || !xe(e.charCodeAt(t)))
              )
                return (a = 16);
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return (i += d()), (a = 11);
            default:
              while (t < r && g(n)) t++, (n = e.charCodeAt(t));
              if (o !== t) {
                switch (((i = e.substring(o, t)), i)) {
                  case "true":
                    return (a = 8);
                  case "false":
                    return (a = 9);
                  case "null":
                    return (a = 7);
                }
                return (a = 16);
              }
              return (i += String.fromCharCode(n)), t++, (a = 16);
          }
        }
        function g(e) {
          if (_e(e) || Ee(e)) return !1;
          switch (e) {
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
              return !1;
          }
          return !0;
        }
        function h() {
          var e;
          do {
            e = l();
          } while (e >= 12 && e <= 15);
          return e;
        }
        return {
          setPosition: c,
          getPosition: function() {
            return t;
          },
          scan: n ? h : l,
          getToken: function() {
            return a;
          },
          getTokenValue: function() {
            return i;
          },
          getTokenOffset: function() {
            return o;
          },
          getTokenLength: function() {
            return t - o;
          },
          getTokenError: function() {
            return s;
          }
        };
      }
      function _e(e) {
        return (
          32 === e ||
          9 === e ||
          11 === e ||
          12 === e ||
          160 === e ||
          5760 === e ||
          (e >= 8192 && e <= 8203) ||
          8239 === e ||
          8287 === e ||
          12288 === e ||
          65279 === e
        );
      }
      function Ee(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e;
      }
      function xe(e) {
        return e >= 48 && e <= 57;
      }
      (function(e) {
        e.DEFAULT = { allowTrailingComma: !1 };
      })(me || (me = {}));
      var Se = ye;
      function Ie(e) {
        return {
          getInitialState: function() {
            return new Ne(null, null, !1);
          },
          tokenize: function(n, t, r, i) {
            return Ue(e, n, t, r, i);
          }
        };
      }
      var Ae = "delimiter.bracket.json",
        Te = "delimiter.array.json",
        Me = "delimiter.colon.json",
        Pe = "delimiter.comma.json",
        Re = "keyword.json",
        je = "keyword.json",
        Fe = "string.value.json",
        De = "number.json",
        Le = "string.key.json",
        Oe = "comment.block.json",
        We = "comment.line.json",
        Ne = (function() {
          function e(e, n, t) {
            (this._state = e), (this.scanError = n), (this.lastWasColon = t);
          }
          return (
            (e.prototype.clone = function() {
              return new e(this._state, this.scanError, this.lastWasColon);
            }),
            (e.prototype.equals = function(n) {
              return (
                n === this ||
                (!!(n && n instanceof e) &&
                  (this.scanError === n.scanError &&
                    this.lastWasColon === n.lastWasColon))
              );
            }),
            (e.prototype.getStateData = function() {
              return this._state;
            }),
            (e.prototype.setStateData = function(e) {
              this._state = e;
            }),
            e
          );
        })();
      function Ue(e, n, t, r, i) {
        void 0 === r && (r = 0);
        var o = 0,
          a = !1;
        switch (t.scanError) {
          case 2:
            (n = '"' + n), (o = 1);
            break;
          case 1:
            (n = "/*" + n), (o = 2);
            break;
        }
        var s,
          u,
          c = Se(n),
          d = t.lastWasColon;
        u = { tokens: [], endState: t.clone() };
        while (1) {
          var f = r + c.getPosition(),
            l = "";
          if (((s = c.scan()), 17 === s)) break;
          if (f === r + c.getPosition())
            throw new Error(
              "Scanner did not advance, next 3 characters are: " +
                n.substr(c.getPosition(), 3)
            );
          switch ((a && (f -= o), (a = o > 0), s)) {
            case 1:
              (l = Ae), (d = !1);
              break;
            case 2:
              (l = Ae), (d = !1);
              break;
            case 3:
              (l = Te), (d = !1);
              break;
            case 4:
              (l = Te), (d = !1);
              break;
            case 6:
              (l = Me), (d = !0);
              break;
            case 5:
              (l = Pe), (d = !1);
              break;
            case 8:
            case 9:
              (l = Re), (d = !1);
              break;
            case 7:
              (l = je), (d = !1);
              break;
            case 10:
              (l = d ? Fe : Le), (d = !1);
              break;
            case 11:
              (l = De), (d = !1);
              break;
          }
          if (e)
            switch (s) {
              case 12:
                l = We;
                break;
              case 13:
                l = Oe;
                break;
            }
          (u.endState = new Ne(t.getStateData(), c.getTokenError(), d)),
            u.tokens.push({ startIndex: f, scopes: l });
        }
        return u;
      }
      function Ve(e) {
        var n = [],
          t = new _(e);
        n.push(t);
        var r = function() {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return t.getLanguageServiceWorker.apply(t, e);
          },
          i = e.languageId;
        n.push(monaco.languages.registerCompletionItemProvider(i, new ue(r))),
          n.push(monaco.languages.registerHoverProvider(i, new le(r))),
          n.push(monaco.languages.registerDocumentSymbolProvider(i, new he(r))),
          n.push(
            monaco.languages.registerDocumentFormattingEditProvider(
              i,
              new ve(r)
            )
          ),
          n.push(
            monaco.languages.registerDocumentRangeFormattingEditProvider(
              i,
              new be(r)
            )
          ),
          n.push(new ee(i, r, e)),
          n.push(monaco.languages.setTokensProvider(i, Ie(!0))),
          n.push(monaco.languages.setLanguageConfiguration(i, Ke)),
          n.push(monaco.languages.registerColorProvider(i, new ke(r))),
          n.push(monaco.languages.registerFoldingRangeProvider(i, new we(r)));
      }
      t.d(n, "setupMode", function() {
        return Ve;
      });
      var Ke = {
        wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
        comments: { lineComment: "//", blockComment: ["/*", "*/"] },
        brackets: [["{", "}"], ["[", "]"]],
        autoClosingPairs: [
          { open: "{", close: "}", notIn: ["string"] },
          { open: "[", close: "]", notIn: ["string"] },
          { open: '"', close: '"', notIn: ["string"] }
        ]
      };
    }
  }
]);
//# sourceMappingURL=chunk-2d0c1ed0.efa20cc6.js.map
