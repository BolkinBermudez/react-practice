import React from "react";
import "./style.css";
import "http://fb.me/react-with-addons-0.12.0.js";
import "http://fb.me/JSXTransformer-0.12.0.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js";

export default function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3" />
        <div id="Calculadora" class="col-md-6">
          <div class="panel panel-primary" style="margin-top: 10%;">
            <div class="panel-heading">Calculadora</div>
            <div class="panel-body">
              <div class="col-md-12" style="margin-bottom: 10px;">
                <div id="idCalculadora" />
              </div>
            </div>
          </div>
          <div class="col-md-3" />
        </div>
      </div>
    </div>
    
  );
}
